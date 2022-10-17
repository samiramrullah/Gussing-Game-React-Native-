import { Text, Button, View, TextInput } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
const StartGameScreen = () => {
    return (
        <View>
            <TextInput placeholder='Enter Number' />
            <PrimaryButton>Reset</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;