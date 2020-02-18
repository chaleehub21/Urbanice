import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';

export default function ItemList({ desc }) {
    return (
        <View style={styles.item}>
          {console.log('description : '+ desc)}
            <Text style={styles.title}>{desc}</Text>
        </View>
    );
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