import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Platform, Alert, Switch, SafeAreaView } from 'react-native';

export default function App() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const mostrarAlerta=(titulo, mensaje, botones)=>{
    if (Platform.OS == 'web'){
      window.alert(` ${titulo}\n\n${mensaje} `);
      return;
    }
    Alert.alert(titulo, mensaje, botones)
  }

  const confirmarEnvio=()=>{
    mostrarAlerta(
      'confirmar Envio',
      'Si estas seguro de confirmar el envio',
      [
        {
          text: 'Cancelar',
          onPress: ()=> mostrarAlerta('Cancelado', 'No se envio nada'),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: ()=> mostrarAlerta('Enviado', 'Se ha enviado tu formulario')
        },
      ]
    )
  }

  const validarCampos = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      mostrarAlerta('Error', 'El semestre debe ser un número.'); 
      return;
    }

    const asisteTaller = taller ? 'Sí' : 'No';
    const reqConstancia = constancia ? 'Sí' : 'No';
    const vaDeportes = deportes ? 'Sí' : 'No';

    mostrarAlerta(
      'Registro enviado', 
      `Nombre: ${nombre}
      \nCarrera: ${carrera}
      \nSemestre: ${semestre}
      \n\nTaller: ${asisteTaller}
      \nConstancia: ${reqConstancia}
      \nDeportes: ${vaDeportes}`); 
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
    <ScrollView contentContainerStyle={styles.contenidoScroll}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Registro de Evento Universitario</Text>
        
        <Text>Nombre:</Text>
        <TextInput
          value={nombre}
          onChangeText={setNombre}
          placeholder='Escribe tu nombre'
          autoCapitalize='words'
           style={styles.input}
        />

        <Text>Carrera</Text>
        <TextInput
          value={carrera}
          onChangeText={setCarrera}
          placeholder='Escribe tu carrera'
          autoCapitalize='words'
           style={styles.input}
        />

        <Text>Semestre</Text>
        <TextInput
          value={semestre}
          onChangeText={setSemestre}
          placeholder='semestre'
          keyboardType='numeric'
          style={styles.input}
        />
        <Text style={styles.subtitulo}>Opciones</Text>

        <Text>¿Asistira al taller?
          <Switch
          value={taller}
          onValueChange={setTaller}
          trackColor={{false: '#cbd5e1', true:'#6366f1'}}
          />
        </Text>

        <Text>¿Requiere constancia?
          <Switch
          value={constancia}
          onValueChange={setConstancia}
          trackColor={{false: '#cbd5e1', true:'#6366f1'}}
          />
        </Text>

        <Text>¿Participara en deportes?
          <Switch
          value={deportes}
          onValueChange={setDeportes}
          trackColor={{false: '#cbd5e1', true:'#6366f1'}}
          />
        </Text>

        <View>
          <Pressable
          style={({pressed})=>[
            styles.boton,
            pressed && styles.botonPresionado,
          ]
          }
          onPress={validarCampos}
          >
            <Text style={styles.textoBoton}>Enviar</Text>
          </Pressable>
        </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contenidoScroll: {
    padding: 16,
    paddingBottom: 80,
  },
  titulo:{
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20, 
  },
  subtitulo:{
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#d5d4d4',
    borderRadius: 6,
    padding: 12,
    color: '#c2c2c2',
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: '14',
    paddingHorizontal: '25',
    borderRadius: 10,
  },
  botonPresionado: {
    backgroundColor: '#1e40af',
    transform: [{scale:0.96}],
  }, 
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
