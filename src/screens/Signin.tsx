import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { MyInput } from '../components/MyInput';
import { MyButton } from '../components/MyButton';

export function Signin() {
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
        Faça login com seus dados
      </Text>   
      
      <MyInput
      title="E-mail"
      />

      <MyInput
      title="Senha"  
      />

      <MyButton
      title="Fazer login"
      />

      <View
      style={ styles.createAccountContainer }
      >
        <Text
        style={ styles.createAccountText }
        >
          Não tem uma conta?
        </Text>
        <Pressable>
          <Text
            style={styles.createAccountPressableText}
          > Crie uma agora!
          </Text>
        </Pressable>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container:  {
    backgroundColor: '#000000',
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 24
  },
  image: {
    width: 250,
    height: 100,
    marginBottom: 30,
  },
  createAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10
  },
  createAccountText: {
    color: 'white',
    fontSize: 16
  },
  createAccountPressableText: {
    color: '#95D5B2',
    fontSize: 16
  }
})