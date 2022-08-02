import { View, StyleSheet } from 'react-native';

import { MyHeader } from '../components/MyHeader';

export function Home() {
    return (
        <View
        style={styles.mainContainer }
        >
            <MyHeader title="Home"  />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        flex: 1,
    }
})