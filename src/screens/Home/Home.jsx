import React, { useState } from 'react';
import { Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, View } from 'react-native';
import styles from './Index';
import timerBackground from '../../assets/background/timer.gif'

import axios from 'axios';

export default function Home({ navigation }) {
    const [cidade, setCidade] = useState('');

    const [nomeBtn, setNomeBtn] = useState('Iniciar');

    const buscarResultados = () => {
        const key = '52abfb2c0ec21a123c78b3b918993609';
        const urlApi = `http://api.openweathermap.org/data/2.5/weather?q=${cidade.toLocaleLowerCase()}&appid=${key}`

        axios.get(urlApi).then(
            (res) => {
                const resultados = {
                    cidade: res.data.name,
                    velocidadeVento: res.data.wind.speed,
                    umidade: res.data.main.humidity,
                    tempAtual: res.data.main.temp,
                    tempMax: res.data.main.temp_max,
                    tempMin: res.data.main.temp_min,
                };

                navigation.navigate('Consulta', resultados, setCidade())
            }
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground resizeMode={'cover'} source={timerBackground} style={styles.background}>
                <Text style={styles.title}>News</Text>
                <Text style={styles.titleSub}>Weather</Text>

                <View>
                    <KeyboardAvoidingView behavior='position'>
                        {nomeBtn != 'Iniciar' &&
                            <TextInput
                                style={styles.inputText}
                                onChangeText={setCidade}
                                value={cidade}
                                placeholder="Digite o nome da sua Cidade/Estado"
                            />
                        }

                        {nomeBtn === 'Consultar' &&
                            <TouchableOpacity style={styles.fakeButton}
                                onPress={
                                    () => 
                                    {buscarResultados()}
                                }>
                                <Text style={styles.textButton}>{nomeBtn}</Text>
                            </TouchableOpacity>
                        }

                        {nomeBtn === 'Iniciar' &&
                            <TouchableOpacity style={styles.fakeButton} onPress={() => setNomeBtn('Consultar')}>
                                <Text style={styles.textButton}>{nomeBtn}</Text>
                            </TouchableOpacity>
                        }
                    </KeyboardAvoidingView>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}