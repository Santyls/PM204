import { useRef, useState } from 'react';
import {View, Text, StyleSheet, ScrollView,  Pressable,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaScreen() {
  const [mostrarMensaje, setMostrarMensaje] = useState(true);
  const [mostrarBotonArriba, setMostrarBotonArriba] = useState(false);

  const scrollRef = useRef(null);

  const tareas = [
    'Estudiar componentes de React Native',
    'Repasar SafeAreaView',
    'Practicar ScrollView',
    'Realizar capturas de la aplicación',
    'Completar el reporte de práctica',
    'Revisar estilos con StyleSheet',
    'Probar la app en Expo Go',
    'Agregar tarjetas al ScrollView',
    'Verificar el botón para subir arriba',
    'Guardar evidencia del código',
    'Revisar errores en consola',
    'Entregar la práctica terminada',
  ];

  const manejarScroll = (evento) => {
    const posicionY = evento.nativeEvent.contentOffset.y;
    setMostrarBotonArriba(posicionY > 200);
  };

  const subirArriba = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis tareas</Text>
        <Text style={styles.subtitulo}>SafeAreaView & ScrollView</Text>
      </View>

      {mostrarMensaje && (
        <View style={styles.mensaje}>
          <Text style={styles.mensajeTexto}>
            Bienvenido, revisa tus tareas pendientes.
          </Text>

          <Pressable onPress={() => setMostrarMensaje(false)}>
            <Text style={styles.cerrar}>X</Text>
          </Pressable>
        </View>
      )}

      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.contenidoScroll}
        showsVerticalScrollIndicator={false}
        onScroll={manejarScroll}
        scrollEventThrottle={16}
      >
        {tareas.map((tarea, index) => (
          <View key={index} style={styles.tarjeta}>
            <Text style={styles.numero}>Tarea {index + 1}</Text>
            <Text style={styles.tarjetaTexto}>{tarea}</Text>
          </View>
        ))}
      </ScrollView>

      {mostrarBotonArriba && (
        <Pressable style={styles.botonArriba} onPress={subirArriba}>
          <Text style={styles.textoBotonArriba}>↑</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#eef2ff',
  },

  encabezado: {
    backgroundColor: '#1e3a8a',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  titulo: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#dbeafe',
    fontSize: 15,
    marginTop: 4,
  },

  mensaje: {
    backgroundColor: '#fef3c7',
    margin: 16,
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mensajeTexto: {
    color: '#78350f',
    fontSize: 14,
    flex: 1,
  },

  cerrar: {
    color: '#78350f',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 8,
  },

  scroll: {
    flex: 1,
  },

  contenidoScroll: {
    padding: 16,
    paddingBottom: 80,
  },

  tarjeta: {
    backgroundColor: 'white',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },

  numero: {
    fontSize: 13,
    color: '#2563eb',
    fontWeight: 'bold',
    marginBottom: 4,
  },

  tarjetaTexto: {
    fontSize: 16,
    color: '#1e293b',
  },

  botonArriba: {
    position: 'absolute',
    right: 20,
    bottom: 25,
    backgroundColor: '#dc2626',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotonArriba: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
});