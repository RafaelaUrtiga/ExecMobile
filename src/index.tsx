
import React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlaneUp, faCar, faHouse, faUtensils, faWrench } from '@fortawesome/free-solid-svg-icons';

const gastos = [
  { id: '1', nome: 'Pizza (R$ 30)', data: '20/01/2020' },
  { id: '2', nome: 'Coca-Cola (R$ 10)', data: '20/01/2020' },
];

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Bem vindo, Carlos</Text>
        <Text style={styles.gastoLabel}>Você gastou hoje</Text>
        <Text style={styles.valor}>R$ 500</Text>
        <Text style={styles.periodo}>ESCOLHER PERÍODO</Text>

        {/* Período */}
        <View style={styles.periodContainer}>
          <Text style={styles.period}>Hoje</Text>
          <Text style={styles.period}>Essa Semana</Text>
          <Text style={styles.period}>Esse Mês</Text>
        </View>
      </View>

      {/* Ícones de categoria */}
      <View style={styles.iconsContainer}>
        <Pressable style={({ pressed }) => [styles.iconBox, pressed && styles.iconBoxPressed]}><FontAwesome5 name="plane" size={24} color="white" /></Pressable>
        <Pressable style={({ pressed }) => [styles.iconBox, pressed && styles.iconBoxPressed]}><FontAwesome5 name="home" size={24} color="white" /></Pressable>
        <Pressable style={({ pressed }) => [styles.iconBox, pressed && styles.iconBoxPressed]}><FontAwesome5 name="utensils" size={24} color="white" /></Pressable>
        <Pressable style={({ pressed }) => [styles.iconBox, pressed && styles.iconBoxPressed]}><FontAwesome5 name="car" size={24} color="white" /></Pressable>
        <Pressable style={({ pressed }) => [styles.iconBox, pressed && styles.iconBoxPressed]}><FontAwesome5 name="tools" size={24} color="white" /></Pressable>
      </View>

      {/* Lista de gastos */}
      <FlatList
        data={gastos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.data}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faeae5',
    alignItems: 'center',
    paddingTop: 0,
  },

  header: {
    backgroundColor: '#d94d4d',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    paddingVertical: 5,
    paddingTop:40,
  },

  welcome: {
    fontSize: 32,
    color: '#fff',
    paddingBottom: 30,
  },

  gastoLabel: {
    color: '#fff',
    marginTop: 80,
  },

  valor: {
    fontSize: 30,
    color: '#fff',
    marginVertical: 5,
  },

    periodo: {
    color: '#fff',
    marginTop: 80,
    marginBottom: 10,
  },

  periodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 10,
    color: 'white',
  },

  period: {
    color: '#fff',
    fontWeight: '600',
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 20,

  },

  iconBox:{
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 4,
  },

  iconBoxPressed: {
    backgroundColor: '#333',
    transform: [{ scale: 0.95 }] },

  item: { 
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 12,
    borderRadius: 10,
    width: 350,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  list: {
    alignItems: 'center',
  },

});