import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList, Button } from 'react-native';
import { Header } from 'react-native-elements';
import Constants from 'expo-constants';
import ItemList from './ItemList';

export default function APIScreen() {
  let [text, setText] = useState('nonthaburi');
  let [result, setResult] = useState();

  function getResult() {
    const key = 'AIzaSyBnKuTbep2rCXA0sJDWoLaLbWrXW0hZ9g4'
    let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${text}&language=th&key=${key}`
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => responseJson.results)
      .then((responseJsonResult) => setResult(responseJsonResult))
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>
      <Header centerComponent={{ text: 'Google' }}
        containerStyle={{
          backgroundColor: 'white',
        }} />
      <View style={{ width: 250, height: 60,padding: 15 }} >
        <Text>InputPlace</Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 500 }}>
          <TextInput style={{ height: 30, width: 200, borderColor: 'gray', borderWidth: 1 }}
            clearButtonMode="always"
            onChangeText={text => setText(text)}
            value={text}
          />
          <View style={{ height: 100 }}>
            <Button title="Find" style={{ height: 50 }} onPress={() => getResult()} />
          </View>
        </View>
      </View>
      <View style={{ height: 50 }} >
        <Text>{console.log(result)}</Text>
        <View style={{ height: 350}}>
          <FlatList
            data={result}
            renderItem={({ item }) => <ItemList desc={`ร้าน : ${item.name} 
            ที่อยู่ : ${item.formatted_address}`} />}
          />
        </View>
      </View>
    </View>
    // <View>
    //   <Header centerComponent={{ text: 'Google' }}
    //     containerStyle={{
    //       backgroundColor: 'white',
    //     }} />
    //   <View>
    //     <Text>InputPlace</Text>
    //     <View style={{ flex: 1, flexDirection: 'row', height: 500 }}>
    //         <TextInput style={{ height: 30, width: 200, borderColor: 'gray', borderWidth: 1 }}
    //           clearButtonMode="always"
    //           onChangeText={text => setText(text)}
    //           value={text}
    //         />
    //       <View style={{ height: 100 }}>
    //         <Button title="Find" style={{ height: 50 }} onPress={() => getResult()} />
    //       </View>
    //     </View>
    //     <Text>{console.log(result)}</Text>
    //     <View style={{height: 400, backgroundColor: '#000000' }}>
    //       <FlatList
    //         data={result}
    //         renderItem={({ item }) => <ItemList desc={item.formatted_address} />}
    //       />
    //     </View>
    //   </View>
    // </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});
