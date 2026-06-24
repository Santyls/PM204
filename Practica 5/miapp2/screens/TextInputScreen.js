/* Zona1: Importaciones componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Alert, Platform, Button } from 'react-native';
import { useState } from 'react';


/* Zona 2: Main - Componentes */
export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [numero, setNumero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [comentario, setComentario] = useState('');
  const [decimal, setDecimal] = useState('');

  const campos = [
    {label: 'Nombre', value: nombre},
    {label: 'Email', value: email},
    {label: 'Contrasena', value: pass ? 'Ingresada': 'No ingresada'},
    {label: 'Edad', value: numero}
  ];

  const mostrarAlerta=(titulo, mensaje, botones)=> {
    if (Platform.OS === 'web'){
      window.alert(` ${titulo}\n\n${mensaje} `);
      return;
    }
    Alert.alert(titulo, mensaje, botones);
  }
  //Alert 1
  const confirmarEnvio = ()=> {
    mostrarAlerta(
      'Confirmar Envio',
      'Si esta seguro de confirmar el envio',
      [
        {
          text: 'Cancelar',
          onPress: () => mostrarAlerta('Cancelado', 'No se envio nada'),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => mostrarAlerta('Enviado', 'Se ha enviado tu formulario')
        },
      ]
    )
  }


  //Alert 2

  const validarNombre = () => {
    if(nombre === ''){
      mostrarAlerta('Campo vacio', 'Porfavor escribe tu nombre');
    }else {
      mostrarAlerta('Nombre guardado', `Hola ${nombre}, tu nombre fue guardado`);
    }
  };

  //Alert 3
  const validarEmail = () => {
    if (email === ''){
      mostrarAlerta('Error', 'Ingresa un email');
    }else if (!email.includes('@')){
        mostrarAlerta('Error', 'Ingresa un email valido');
    }else {
      mostrarAlerta('Tu email es valido', 'Felicidades')
    }
  }

  

  return (
    <ScrollView style={styles.container}>
      <Text>Ejemplos de input</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        value = {nombre}
        onChangeText={setNombre}
        placeholder='Escribe aqui tu nombre...'
        autoCapitalize='words'
        style={styles.input}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value = {email}
        onChangeText={setEmail}
        placeholder='Emiliano@gmail.com'
        keyboardType='email-address'
        autoCapitalize='none'
        style={styles.input}
      />

      <Text style={styles.label}>Contrasena</Text>
      <TextInput
        value = {pass}
        onChangeText={setPass}
        placeholder='*********'
        secureTextEntry={true}
        maxLength={8}
        keyboardType='numeric'
        style={styles.input}
      />

      <Text style={styles.label}>Edad</Text>
      <TextInput
        value = {numero}
        onChangeText={setNumero}
        placeholder='20'
        keyboardType='numeric'
        style={styles.input}
      />

      <Text style={styles.label}>Telefono</Text>
      <TextInput
        value = {telefono}
        onChangeText={setTelefono}
        placeholder='ingrese su numero telefonico'
        keyboardType='phone-pad'
        style={styles.input}
      />

      <Text style={styles.label}>Busqueda</Text>
      <TextInput
        value = {busqueda}
        onChangeText={setBusqueda}
        placeholder='Buscar...'
        returnKeyType='search'
        keyboardType='default'
        style={styles.input}
      />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        value = {decimal}
        onChangeText={setDecimal}
        placeholder='15.5'
        keyboardType='decimal-pad'
        style={styles.input}
      />

      <Text style={styles.label}>Comentario</Text>
      <TextInput
        value = {comentario}
        onChangeText={setComentario}
        placeholder='escribe tu comentario...'
        multiline={true}
        numberOfLines={4}
        keyboardType='default'
        style={styles.input}
      />

      <View style={styles.botonesContainer}>
        <View style={styles.botonWrapper}>
          <Button title='Guardar nombre' onPress={validarNombre}></Button>
        </View>
        <View style={styles.botonWrapper}>
          <Button title='Validar email' onPress={validarEmail}></Button>
        </View>
      </View>

    </ScrollView>
  );
}

/* Zona 3: Estilos y Posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:30
  },
  label: {
    fontSize: 13,
    color: '#646464',
    marginTop: 12
  },
  title: {
    fontSize: 22,
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
  botonesContainer: {
    marginTop: 20,
    gap: 8
  },
  botonWrapper: {
    marginBottom: 4
  }
  
});
