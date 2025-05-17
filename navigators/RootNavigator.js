import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterScreen from "../screens/CounterScreen";
import BulbScreen from "../screens/BulbScreen";
import DashboardScreen from "../screens/DashboardScreen";


const Stack = createNativeStackNavigator();
const RootNavigator = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
            />
            <Stack.Screen
                name="CounterScreen"
                component={CounterScreen}
            />

            <Stack.Screen
                name="BulbScreen"
                component={BulbScreen}
            />
        </Stack.Navigator>
    )
        ;
}

export default RootNavigator;