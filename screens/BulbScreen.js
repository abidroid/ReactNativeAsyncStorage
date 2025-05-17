import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const BulbScreen = () => {

    const [bulbOn, setBulbChange] = React.useState(false)

    const toggleSwitch = () => setBulbChange(previousState => !previousState);

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