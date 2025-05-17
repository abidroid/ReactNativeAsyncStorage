import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BulbScreen = () => {

    const [bulbOn, setBulbChange] = React.useState(false)

    const toggleSwitch = () => setBulbChange(previousState => !previousState);

    const BULB_KEY = 'bulb_key';


    useEffect(() => {

        // load the status on component mount
        const loadBulb = async () => {

            try {
                const value = await AsyncStorage.getItem(BULB_KEY);
                if (value != null) {
                    setBulbChange(value === 'true');
                }
            } catch (e) {

            }
        };

        loadBulb();
    }, []);


    // save bulb status every time it changes
    useEffect(() => {
        const saveBulbStatus = async () => {
            try{
                AsyncStorage.setItem(BULB_KEY, bulbOn.toString());
            }catch(e){

            }

        };
        saveBulbStatus();

    }, [bulbOn]);



    return (
        <View style={styles.container}>

            <MaterialIcons name='lightbulb' size={150}
                color={bulbOn ? 'yellow' : 'black'}
            />
            <Switch
                value={bulbOn}
                onChange={toggleSwitch}
            ></Switch>
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
export default BulbScreen;