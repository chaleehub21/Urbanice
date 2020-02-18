import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import ItemList from './ItemList';



export default function TestScreen() {
  const [value, setValue] = useState(0);
  let [Data, setData] = useState([]);

  function clear() {
    setData(Data = [])
    setValue(0)
  }

  function getSequence() {
    let count = 3;
    for (let i = 0; count < value; i++) {
      Data.push((count += i) + ',')
      i += 1;
    }
  }

  return (
    <View>
      <Header centerComponent={{ text: 'Test' }}
        containerStyle={{
          backgroundColor: 'white',
        }} />
      <View style={{ styles, padding: 15 }}>
        <Text>InputNumber</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          clearButtonMode="always"
          keyboardType='numeric'
          returnKeyType={'done'}
          onChangeText={text => setValue(text)}
          value={value}
        />
        <Button
          title="Clear!!!"
          onPress={() => clear()}
        ></Button>
        <Text>{getSequence()}</Text>
        <FlatList
          data={Data}
          renderItem={({ item }) => <ItemList desc={item} />}
        />
      </View>
    </View>
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

