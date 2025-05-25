import {View, Text, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const VerticalCard = () => {
    return (
        <View style={styles.contianer}>
            <MaterialIcons name='lightbulb' size={80}/>
        </View>
    );
};

const CardScreen = () => {

    return (
        <VerticalCard />
    );
};

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: 'white',
        padding: 8,
        margin: 8,
    },
});

export default CardScreen;