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
      
        <Perfil style={styles.tarjetaVerde} nombre="Santiago" carrera="ISC" materia="Movil" cuatri="9"/>
        <Perfil 
        style={styles.tarjetaRoja}
        nombre="Bjork" 
        carrera="Comercio" 
        materia="Algo" 
        cuatri="9"/>
        <Perfil style={styles.tarjetaVerde} nombre="Santiago2" carrera="ISC" materia="Movil" cuatri="9"/>
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
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  tarjetaVerde:{
        backgroundColor: 'green',
    },
    tarjetaRoja:{
        backgroundColor: 'red',
    }
});
