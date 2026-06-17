/* Zona1: Importaciones componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


/* Zona 2: Main - Componentes */
export default function ModalScreen() {
  return (
    <View style={styles.container}>
           <Text>Aqui va la practica de Modal</Text>
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
  
});
