
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

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

        {/* Período */}
        <View style={styles.periodContainer}>
          <Text style={styles.period}>Hoje</Text>
          <Text style={styles.period}>Essa Semana</Text>
          <Text style={styles.period}>Esse Mês</Text>
        </View>
      </View>

      {/* Ícones de categoria */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity><FontAwesome5 name="plane" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity><FontAwesome5 name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity><FontAwesome5 name="utensils" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity><FontAwesome5 name="car" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity><FontAwesome5 name="tools" size={24} color="black" /></TouchableOpacity>
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
    paddingTop: 40,
  },
  header: {
    backgroundColor: '#d94d4d',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 60,
  },
  welcome: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  gastoLabel: {
    color: '#fff',
    marginTop: 10,
  },
  valor: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  periodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 10,
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
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    width: 300,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  list: {
    alignItems: 'center',
  },
});