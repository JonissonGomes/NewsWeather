import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Importando paginas */
import Home from './src/screens/Home/Home';
import Consulta from './src/screens/Consulta/Consulta';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Consulta" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}