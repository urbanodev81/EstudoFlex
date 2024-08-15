import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.caixaAzul}></View>
      <View style={styles.caixaVermelha}></View>
      <View style={styles.caixaVerde}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  caixaAzul: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 10,
    alignSelf:'flex-end'
  },
  caixaVermelha: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 10,
  },
  caixaVerde: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    margin: 10,
  },
});
