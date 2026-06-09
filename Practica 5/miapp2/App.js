/* Zona1: Importaciones componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

/* Zona 2: Main - Componentes */
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola Mundo RN</Text>
        <Text>--------------------------------------</Text>
        <Saludo></Saludo>
        <Saludo/>
        <Text>--------------------------------------</Text>
        <Saludo2/>
        <Text>------------------Repaso de componentes--------------------</Text>
        <Perfil/>
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Estilos y Posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
