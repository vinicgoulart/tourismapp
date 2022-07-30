import { TextInput, StyleSheet } from 'react-native';

type Props = {
    title: string,
}

export function MyInput({ title, ...rest }: Props) {
    return (
        <TextInput
        style={ styles.TextInput }
        placeholder={ title }
        placeholderTextColor='#95D5B2'  
        { ...rest }
        />
    );
}

const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: "transparent",
        color: 'white',
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: '#52B788',
        borderRadius: 15,
        paddingLeft: 20,
        marginTop: 15,
        fontSize: 16
    }
});