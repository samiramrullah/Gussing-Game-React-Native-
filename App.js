
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
// import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StartGameScreen />
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
