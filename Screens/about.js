import { Text, View, StyleSheet } from "react-native";

const About= () => {
    <View style={styles.page}>
        <Text>About screen</Text>
    </View>
};

export default About;

const styles = StyleSheet.create({
    page: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
});