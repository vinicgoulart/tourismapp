import { View, StyleSheet } from 'react-native';

import { MyHeader } from '../components/MyHeader';

import { ImageCards } from '../components/ImageCards';

export function Home() {
    return (
        <View
        style={styles.mainContainer }
        >
            <MyHeader title="Home" />
            
            <ImageCards />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        flex: 1,
    }
})