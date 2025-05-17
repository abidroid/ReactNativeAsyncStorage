import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = React.useState(0)
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setCounter(counter - 1)}

                style={styles.buttonStyle}
            ><Text>Decrement</Text></Pressable>
            <Text style={styles.txtResult}>{counter}</Text>

            <Pressable
                onPress={() => setCounter(counter + 1)}
                style={styles.buttonStyle}
            ><Text>Increment</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16, alignItems: 'center' },
    buttonStyle: {
        backgroundColor: '#abcdef',
        padding: 8,
        alignItems: 'center',
        borderRadius: 8,
    },

    txtResult: {fontSize: 24, fontWeight: 'bold'},
});
export default CounterScreen;