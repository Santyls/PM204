/* Zona1: Importaciones componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';


/* Zona 2: Main - Componentes */
export default function FlatListScreen() {

  const frutas = [
    { id: '1', nombre: 'Manzana' },
    { id: '2', nombre: 'Papaya' },
    { id: '3', nombre: 'Uvas' },
    { id: '4', nombre: 'Guayaba' },
  ];

  const tareas = [
    { titulo: 'Mañana', data: ['Desayunar','Hacer ejercicio'] },
    { titulo: 'Tarde', data: ['Estudiar', 'Hacer tarea'] },
    { titulo: 'Noche', data: ['Estudiar', 'Dormir'] },
  ];  

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>FlatList</Text>
      <FlatList
        data={frutas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={styles.texto}>{item.nombre}</Text>
          </View>
        )}
      />

      <Text style={styles.titulo}>SectionList</Text>
      <SectionList
        sections={tareas}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.tarjeta}>
            <Text style={styles.texto}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.seccionTitulo}>{section.titulo}</Text>
        )}
      />

    </View>
  );
}

/* Zona 3: Estilos y Posicionamiento */

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 10, width: '100%'},
  titulo: { fontSize: 18, fontWeight: '700', backgroundColor: '#111', color: '#fff', padding: 6, marginTop: 10},
  seccionTitulo: {fontSize: 15, fontWeight: '700', backgroundColor: '#e9ecef', padding: 6, marginTop: 6},
  tarjeta: {backgroundColor: '#f4f4f4', padding: 10, marginBottom: 6, borderRadius: 6},
  texto: {fontSize: 14, color: '#222'}
});
