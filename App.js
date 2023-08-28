import { StatusBar } from 'expo-status-bar';
import ListMovie from './src/ListMovie';
import { View } from 'react-native';
export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar style='auto'/>
      <ListMovie/>
    </View>
  );
}


