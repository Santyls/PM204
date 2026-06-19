/* Zona1: Importaciones componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroungScreen from './ImageBackgroungScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';

/* Zona 2: Main - Componentes */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safeArea':
            return <SafeAreaScreen/>
        case 'pressable':
            return <PressableScreen/>
        case 'textInput':
            return <TextInputScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'imageBackgroung':
            return <ImageBackgroungScreen/>
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    
                    <View>
                        <Button title='Practica Tarjetas' onPress={()=>setScreen('tarjetas')}/>
                    </View>

                    <View>
                        <Button title='Practica SafeArea' onPress={()=>setScreen('safeArea')}/>
                    </View>

                    <View>
                        <Button title='Practica Pressable' onPress={()=>setScreen('pressable')}/>
                    </View>

                    <View>
                        <Button title='Practica TextInput' onPress={()=>setScreen('textInput')}/>
                    </View>

                    <View>
                        <Button title='Practica FlatList' onPress={()=>setScreen('flatList')}/>
                    </View>

                    <View>
                        <Button title='Practica ImageBackground' onPress={()=>setScreen('imageBackgroung')}/>
                    </View>

                    <View>
                        <Button title='Practica ActivityIndicator' onPress={()=>setScreen('activityIndicator')}/>
                    </View>

                    <View>
                        <Button title='Practica Modal' onPress={()=>setScreen('modal')}/>
                    </View>

                    <StatusBar style="auto" />
                </View>          
            );
    }
}

/* Zona 3: Estilos y Posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'space-around',

    // ⚠️ esto pone botones en fila
    flexDirection: 'row', 
  },
});
