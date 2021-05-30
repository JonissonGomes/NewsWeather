import React, { useState } from 'react';
import { Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from './Index';
import timerBackground from '../../assets/background/timer.gif'

export default function Home({ navigation }) {

    const [cidade, setCidade] = useState('');

    const [nomeBtn, setNomeBtn] = useState('Iniciar');

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={timerBackground} style={styles.background}>
                <Text style={styles.title}>News</Text>
                <Text style={styles.titleSub}>Weather</Text>


                {nomeBtn != 'Iniciar' &&
                    <TextInput
                        style={styles.inputText}
                        onChangeText={setCidade}
                        value={cidade}
                        placeholder="Digite o nome da sua cidade"
                    />
                }

                {nomeBtn === 'Consultar' &&
                    <TouchableOpacity style={styles.fakeButton} onPress={() => navigation.navigate('Consulta')}>
                        <Text style={styles.textButton}>{nomeBtn}</Text>
                    </TouchableOpacity>
                }

                {nomeBtn === 'Iniciar' &&
                    <TouchableOpacity style={styles.fakeButton} onPress={() => setNomeBtn('Consultar')}>
                        <Text style={styles.textButton}>{nomeBtn}</Text>
                    </TouchableOpacity>
                }
            </ImageBackground>
        </SafeAreaView>
    )
}