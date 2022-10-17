
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
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
