import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {

    const { height } = useWindowDimensions();
    const Navigation = useNavigation();

    const onStartPressed = () => Navigation.navigate("Localisation")


    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.root}>
                <Image
                    source={require('../../../assets/images/logo1.png')}
                    style={styles.logo, { height: height * 0.15, marginTop: 20 }}
                    resizeMode='contain'
                />
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', paddingTop: 3 }} > FinoTbib </Text>
                <View style={styles.test}>
                    <View style={styles.test1}>
                        <CustomButton text1="Start" onPress={onStartPressed} bgColor="#56ADE7" fgColor="white" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: '50%',
        maxHeight: 200,
        maxWidth: 200,

    },
    root: {

        backgroundColor: '#56ADE7',
        width: '100%',
        alignItems: 'center'
    },

    test: {
        marginTop: 30,
        borderRadius: 40,
        backgroundColor: 'white',
        width: "100%"
    },
    test1: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 15,
        marginVertical: 30,
        paddingHorizontal: 30
    }
    ,
    image: {
        flex: 1,
        justifyContent: "center"
    },

});
export default WelcomeScreen;
