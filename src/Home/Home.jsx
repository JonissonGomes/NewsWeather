import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import styles from './Index';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <Text>Home</Text>

            <Button
                title="Consultar"
                onPress={() => navigation.navigate('Consulta')}
            />

        </SafeAreaView>
    )
}