import React, { useState } from 'react'
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Index';

import nevando from '../../assets/img/neve.gif';
import nuvens from '../../assets/img/nuvens.gif';
import ensolarado from '../../assets/img/ensolarado.gif';
import chuvoso from '../../assets/img/chuvoso.gif';


export default function Consulta({ navigation, route }) {

    const cidade = route.params.cidade;
    const tempAtual = convertToC(route.params.tempAtual);
    const tempMin = convertToC(route.params.tempMin);
    const tempMax = convertToC(route.params.tempMax);
    const velVento = parseInt(route.params.velocidadeVento);
    const umidade = route.params.umidade;

    function convertToC(kelvin) {

        const graus = parseInt(kelvin)
        const convertToC = graus - 273
        return (convertToC)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxClima}>
                {tempAtual > 10 && tempAtual <= 16 &&
                    <Image source={nevando} style={styles.imageClima} />
                }

                {tempAtual > 16 && tempAtual <= 18 &&
                    <Image source={chuvoso} style={styles.imageClima} />
                }

                {(tempAtual > 18 && tempAtual <= 24) &&
                    <Image source={nuvens} style={styles.imageClima} />
                }

                {tempAtual > 24 && tempAtual <= 30 &&
                    <Image source={ensolarado} style={styles.imageClima} />
                }

                <View style={styles.boxInfo}>
                    <Text style={styles.nomeCidade}>{cidade}</Text>

                    <Text style={styles.temperatura}>{tempAtual}º</Text>
                </View>
            </View>

            <View style={styles.boxInfoTemperatura}>
                <View style={styles.boxInfoDesc}>
                    <Text style={styles.tituloInfoTemp}>Temp. Min</Text>
                    <Text style={styles.tituloInfoValor}>{tempMin}º</Text>
                </View>

                <View style={styles.boxInfoDesc}>
                    <Text style={styles.tituloInfoTemp}>Temp. Max</Text>
                    <Text style={styles.tituloInfoValor}>{tempMax}º</Text>
                </View>

            </View>


            <View style={styles.boxMore}>

                <View style={styles.row}>
                    <View style={styles.boxMoreInfo}>
                        <Text style={styles.titleMore}>Vel. Vento</Text>
                        <Text style={styles.valorMore}>{velVento} Km</Text>
                    </View>

                    <View style={styles.boxMoreInfo}>
                        <Text style={styles.titleMore}>Umidade</Text>
                        <Text style={styles.valorMore}>{umidade}%</Text>
                    </View>
                </View>

                <View style={styles.column}>
                    <View style={styles.boxMoreInfo}>
                        <Text style={styles.titleMore}>Sensação térmica</Text>
                        {tempAtual > 10 && tempAtual < 16 &&
                            <Text style={styles.valorMore}>Frio</Text>
                        }

                        {tempAtual > 16 && tempAtual < 18 &&
                            <Text style={styles.valorMore}>Levemente frio</Text>
                        }

                        {(tempAtual > 18 && tempAtual < 24) &&
                            <Text style={styles.valorMore}>Moderado</Text>
                        }

                        {tempAtual > 24 && tempAtual < 30 &&
                            <Text style={styles.valorMore}>Quente</Text>
                        }
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.fakeButton} onPress={
                () => navigation.navigate('Home')}>
                <Text style={styles.textButton}>Nova consulta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
