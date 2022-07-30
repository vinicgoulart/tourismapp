import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { MyInput } from '../components/MyInput';
import { MyButton } from '../components/MyButton';

export function Signup() {
    return (
        <View
        style={ styles.container }
        >

            <Image
            source={ require('../images/logo-500x500.png') }
            style={ styles.image }  
            />

            <Text
            style={ styles.title }
            >
                Preencha os campos para criar uma conta
            </Text>   

            <MyInput
            title="Nome de usuário"
            />

            <MyInput
            title="E-mail"
            />

            <MyInput
            title="Senha"
            secureTextEntry={true}    
            />

            <MyInput
            title="Confirme sua senha"
            secureTextEntry={true} 
            />

            <MyButton
            title="Registrar-se"
            />

            <View
                style={styles.haveAccountContainer}
            >
                <Text
                    style={styles.haveAccountText}
                >
                    Já tem uma conta? 
                </Text>
                <Pressable>
                    <Text
                        style={styles.haveAccountPressableText}
                    > Faça login agora!
                    </Text>
                </Pressable>
            </View>

        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 24
    },
    image: {
        width: 250,
        height: 150
    },
    haveAccountContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10
    },
    haveAccountText: {
        color: 'white',
        fontSize: 16
    },
    haveAccountPressableText: {
        color: '#95D5B2',
        fontSize: 16
    }
});