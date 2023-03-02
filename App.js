import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Detalhes from './src/Detalhes';

export default function BestFuelApp() {

  const [precoAlcool, setPrecoAlcool] = useState(null);
  const [precoGasolina, setPrecoGasolina] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const inputRef = useRef(null);

  function handleCalcular() {
    if (!precoAlcool || !precoGasolina) {
      alert('É necessário informar os dois valores!');
      return;
    }

    handleAbrirModal();
  }

  function handleAbrirModal() {
    setModalVisible(true);
  }

  function handleFecharModal() {
    setModalVisible(false);
    handleLimpar();
  }

  function handleLimpar() {
    setPrecoAlcool(null);
    setPrecoGasolina(null);
    inputRef.current.focus();
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView  >

        <View style={styles.areaLogo}>
          <Image
            source={require('./src/assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.titulo}>Qual a melhor opção?</Text>
        </View>

        <View style={styles.areaInput}>
          <Text style={styles.label}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={precoAlcool}
            onChangeText={(valor) => setPrecoAlcool(valor)}
            ref={inputRef}
          />

          <Text style={styles.label}>Gasolina (preço por litro):</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={precoGasolina}
            onChangeText={(valor) => setPrecoGasolina(valor)}
          />
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={handleCalcular}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>

        </View>

        <Modal visible={modalVisible} animationType='slide'>
          <Detalhes
            precoAlcool={precoAlcool}
            precoGasolina={precoGasolina}
            fechar={handleFecharModal} />
        </Modal>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777'
  },
  areaLogo: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#FFF'
  },
  areaInput: {
    alignItems: 'center'
  },
  label: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 30,
    backgroundColor: '#fff'
  },
  areaBotao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  botao: {
    width: '90%',
    height: 60,
    backgroundColor: '#FF0000',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'

  },
  textoBotao: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  }

});