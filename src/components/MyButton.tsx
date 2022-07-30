import {  Pressable, StyleSheet, Text } from "react-native";

type Props = {
    title: string
}

export function MyButton({ title, ...rest }: Props) {
    return (
        <Pressable style={styles.button} >
            <Text
            style={ styles.title }
            >{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1B4332',
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#95D5B2',
        marginTop: 30,
    },
    title: {
        color: 'white',
        fontSize: 20
    }
})