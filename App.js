import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Escola Técnica de Barueri - ETEC</Text>
      <Text>Bruna da Silva Theodoro</Text>
      <Text>Curando Desenvolvimento de  Sistemas</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
  container:{
  
  marginTop:30,
  backgroundColor:'#6ca2f7',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10
  
  },
 
  
 })
