import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Detalhes(props) {
    return (
        <View style={styles.container}>

            <View style={styles.areaLogo}>
                <Image
                    source={require('../assets/gas.png')}
                />

                <Text style={styles.resultado}>
                    Compensa usar {(props.precoAlcool / props.precoGasolina) < 0.7 ? 'Álcool' : 'Gasolina'}
                </Text>
            </View>

            <View style={styles.areaValores}>
                <Text style={styles.titulo}>Com os preços:</Text>
                <Text style={styles.descricao}>Álcool: R$ {props.precoAlcool}</Text>
                <Text style={styles.descricao}>Gasolina: R$ {props.precoGasolina}</Text>
            </View>

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={props.fechar}>
                    <Text style={styles.textoBotao}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777'
    },
    areaLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    resultado: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
        color: '#39ff14'
    },
    areaValores: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFF'
    },
    descricao: {
        fontSize: 18,
        color: '#FFF'
    },
    areaBotao:{
        alignItems: 'center',
        marginTop: 30
        
    },
    botao: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#39ff14',
        width: '60%',
        height: 35,
        justifyContent: 'center'

    },
    textoBotao:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#39ff14'
    }

});