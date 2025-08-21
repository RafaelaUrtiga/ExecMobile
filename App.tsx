import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src';

export default function App() {
  return (
    //tudo que estiver dentro do return vai ser renderizado na página 
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d85858ff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
