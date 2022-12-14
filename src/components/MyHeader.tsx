import { View, Text, Image, StyleSheet } from "react-native";
import { ArrowLeft } from 'phosphor-react-native';

type Props = {
    title: string,
}


export function MyHeader({ title, ...rest }: Props) {
    return (
        <View
        style={ styles.headerContainer }
        >
            <Image
            source={ require('../images/logo-without-borders.png') }
            style={ styles.logoImage }
            />

            <Text
            style={ styles.title }
            >
                { title }
            </Text>

            <ArrowLeft
            color="white"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#081C15',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    title: {
        color: 'white'
    },
    logoImage: {
        width: 100,
        height: 50
    }
})

