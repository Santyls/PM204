import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Practica Pressable</Text>
      <Text style={styles.contador}>Presiones: {contador}</Text>

      <Pressable
  style={({ pressed }) => [
    styles.boton,
    pressed && styles.botonPresionado,
    contador >= 5 && styles.botonDesactivado
  ]}
  onPress={() => setContador(contador + 1)}
  onPressIn={() => console.log('Empezaste a presionar')}
  onPressOut={() => console.log('Soltaste el botón')}
  onLongPress={() => alert('Presión larga detectada')}
  delayLongPress={1000}
  
  hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
  android_ripple={{color:'#93c5fd'}}
>
  <Text style={styles.textoBoton}>Aumentar contador</Text>

  <Pressable
  style={styles.botonPequeno}
  
  onPress={() => setContador(contador + 1)}
>
  <Text style={styles.textoBoton}>+</Text>
</Pressable>
</Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonPresionado: {
    backgroundColor: '#1e40af',
    transform:[{scale: 0.96}],
  },
  contador: {
    fontSize: 20,
    marginBottom: 20,
  },
  botonDesactivado: {
    backgroundColor: '#9ca3af'
  }
});

