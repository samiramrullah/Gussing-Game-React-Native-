import { Text, Button, View, TextInput } from 'react-native';
const StartGameScreen = () => {
    return (
        <View>
            <TextInput placeholder='Enter Number' />
            <Button title='Guess' />
        </View>
    )
}

export default StartGameScreen;