import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = React.useState(0);

    const COUNTER_KEY = 'counter_value';

    // Load the counter value from AsyncStorage on component mount
    useEffect(() => {
        const loadCounter = async () => {

            try {

                const value = await AsyncStorage.getItem(COUNTER_KEY);

                if (value != null) {
                    setCounter(parseInt(value));
                }
            } catch (e) {
                console.error("Failed to load counter ", e);
            }
        };

        loadCounter();

    }, []);

    // Save the counter value to AsyncStorage whenever it changes
    useEffect(() => {

        const saveCounter = async () => {

            try {
                await AsyncStorage.setItem(COUNTER_KEY, counter.toString());
            } catch (e) {
                console.error('Failed to save counter.', e);

            }
        };

        saveCounter();
    }, [counter]);

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

    txtResult: { fontSize: 24, fontWeight: 'bold' },
});
export default CounterScreen;