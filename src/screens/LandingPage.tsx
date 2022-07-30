import { View, StyleSheet, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function LandingPage(){
    return (
        <View
        style={ styles.container }
        >

            <StatusBar
            backgroundColor="transparent"    
            />

            <Image
            source={ require('../images/logo-500x500.png') }
            style={ styles.logo }    
            />

            <Text
            style={ styles.title }
            >
                Your app is loading...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 400,
        height: 400
    }, 
    title: {
        color: 'white',
        fontSize: 24
    },
});