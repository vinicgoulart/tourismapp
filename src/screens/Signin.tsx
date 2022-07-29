import { Text, View, StyleSheet } from 'react-native';

export function Signin() {
  return (
    <View
    style={ styles.container }
    >
      <Text
      style={ styles.title }
      >Página de Sign In</Text>      
    </View>
  );

}

const styles = StyleSheet.create({
  container:  {
    backgroundColor: '#050f00',
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: 'white',
  }
})