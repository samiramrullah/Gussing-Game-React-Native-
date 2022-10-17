import { StyleSheet, View, TextInput } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
const StartGameScreen = () => {
    return (
        <View style={styles.innerContainer}>
            <TextInput placeholder='Enter Number' />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    innerContainer: {
        // flex: 1,
        padding: 10,
        marginTop: 85,
        backgroundColor: 'purple',
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 8,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 5
    }
})