import React, { useState } from 'react'
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Index';

import nuvens from '../../assets/img/nuvens.gif';
import ensolarado from '../../assets/img/ensolarado.gif';
import chuvoso from '../../assets/img/chuvoso.gif';


export default function Consulta({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxClima}>
                <Image source={ensolarado} style={styles.imageClima} />

                <View style={styles.boxInfo}>
                    <Text style={styles.nomeCidade}>Igarassu - PE</Text>

                    <Text style={styles.temperatura}>24º</Text>
                </View>
            </View>

            <View style={styles.boxInfoTemperatura}>
                <View style={styles.boxInfoDesc}>
                    <Text style={styles.tituloInfoTemp}>Temp. Min</Text>
                    <Text style={styles.tituloInfoValor}>23º</Text>
                </View>

                <View style={styles.boxInfoDesc}>
                    <Text style={styles.tituloInfoTemp}>Temp. Max</Text>
                    <Text style={styles.tituloInfoValor}>25º</Text>
                </View>

            </View>


            <View style={styles.boxMore}>

                <View style={styles.row}>
                    <View style={styles.boxMoreInfo}>
                        <Text style={styles.titleMore}>Vel. Vento</Text>
                        <Text style={styles.valorMore}>25 Km</Text>
                    </View>

                    <View style={styles.boxMoreInfo}>
                        <Text style={styles.titleMore}>Umidade</Text>
                        <Text style={styles.valorMore}>70</Text>
                    </View>
                </View>

                <View style={styles.column}>
                    <View style={styles.boxMoreInfo}>
                        <Text style={styles.titleMore}>Outras informações</Text>
                        <Text style={styles.valorMore}>Aqui está algumas dados respectivo ao clima atual da sua cidade</Text>
                    </View>
                </View>
                
            </View>


            <TouchableOpacity style={styles.fakeButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton}>Nova consulta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
