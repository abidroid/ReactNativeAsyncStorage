import { Pressable, View, Text, StyleSheet } from "react-native";


const DashboardScreen = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <Pressable style={styles.itemRow}
            onPress={()=> {navigation.navigate("CounterScreen")}}
            >
                <View style={styles.circalAvatar}><Text>1</Text></View>
                <View><Text style={styles.title}>Counter Demo</Text>
                    <Text style={styles.subTitle}>Persist the counter</Text>
                </View>
            </Pressable>
            <Pressable style={styles.itemRow}
                        onPress={()=> {navigation.navigate("BulbScreen")}}

            >
                <View style={styles.circalAvatar}><Text>2</Text></View>
                <View><Text style={styles.title}>Bulb with Switch</Text>
                    <Text style={styles.subTitle}>Persist the bulb</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{padding: 8},
    itemRow: {
        flexDirection: 'row',
        gap: 8,
        backgroundColor: 'white',
        padding: 8,
        margin: 8,
        alignItems: 'center',
        borderRadius: 8,
    },
    circalAvatar: {
        width: 50,
        height: 50,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC'
    }, 

    title: {fontSize: 20},
    subTitle: {fontStyle: "italic"},
});
export default DashboardScreen;