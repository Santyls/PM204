import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuScreen from './screens/MenuScreen';

/* Zona 2: Main - Componentes */
export default function App() {
  return (
    <SafeAreaProvider>
      <MenuScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
