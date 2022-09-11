import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,FlatList } from 'react-native';
import React, { useState} from 'react';


export default function App() {

  const[result, setResult] = useState('')
  const[results, setResults] = useState('')


  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');


  const plusPressed = () => {
    console.log(number1)
    let res = parseFloat(number1) + parseFloat(number2);
    setResult(res);
    setResults(current => [...current,number1+"+"+number2+"="+res]);
   }
   
   const minusPressed = () => {
     console.log(number2)
     let res = parseFloat(number1) - parseFloat(number2);
     setResult(res);
     setResults(current => [...current, number1+"-"+number2+"="+res]);
   }

  return (
    <View style={styles.container}>

      <View style={styles.textFields}>

        <Text style={styles.titleText}>
          Result: {result}
        </Text>
      <TextInput keyboardType='numeric'
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={number1 => setNumber1(number1)}
      value={number1}  
      />
      <TextInput keyboardType='numeric'
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={number2 => setNumber2(number2)}
      value={number2}  
      />
      </View>

      <View style={styles.buttons}>
        <Button title='+' onPress={plusPressed}></Button>
        <Button title='-' onPress={minusPressed}></Button>
      </View>

      <View style={styles.history}>
        <Text style={styles.titleText}>
          History:
        </Text>
        <FlatList 
        data={results}
        renderItem={({item})=> (
          <Text style={styles.titleText}> {item} </Text>
        )
      }
        />
      </View>

    </View>
  );
}



//Instead of a CSS File use StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },

  textFields: {
    flex: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 180
  },

  buttons: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 150,
    paddingTop: 10
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  history: {
    flex: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
