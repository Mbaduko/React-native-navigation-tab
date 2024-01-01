import { Text, View, StyleSheet } from "react-native";

const Home = () => {
    return(
        <View style={styles.page}>
            <Text>Home screen</Text>
        </View>
)};

export default Home;

const styles = StyleSheet.create({
    page: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
});