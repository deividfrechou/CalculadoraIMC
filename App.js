import React from 'react'
import {StyleSheet, View } from 'react-native'
import Title from './src/conponents/title/'
import Main from './src/conponents/Main/'

export default function App() {
  return (
    <View style={styles.container}>
        <Title/>
        <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
