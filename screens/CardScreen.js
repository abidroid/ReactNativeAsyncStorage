import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const VerticalCard = () => {
    return (
        <View>
            <MaterialIcons name='lightbulb' size={80}/>
        </View>
    );
};

const CardScreen = () => {

    return (
        <VerticalCard />
    );
};



export default CardScreen;