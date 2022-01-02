import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import MapView, {
    PROVIDER_GOOGLE,
    Marker,
    Callout,
    Circle,
} from "react-native-maps";
navigator.geolocation = require("@react-native-community/geolocation");


const initalState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};


const LocationScreen = () => {

    const [localisations, setLocalisations] = useState([]);
    const [curentPosition, setCurentPosition] = useState(initalState);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // alert(JSON.stringify(position));
                const { longitude, latitude } = position.coords;
                setCurentPosition({
                    ...curentPosition,
                    latitude,
                    longitude,
                });
            },
            (error) => alert(error.message),
            { timeout: 20000, maximumAge: 1000 }
        );
    }, []);

    useEffect(() => {
        fetch('http://192.168.1.112:80/mobile-api/getLocalisations.php')
            .then(res => res.text())
            .then(response => setLocalisations(response.split(',')))
            .catch(err => console.warn(err))
    }, [])



    return curentPosition.latitude ? (
        <View style={styles.containre}>
            {/* <View style={styles.views}> */}
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ height: "58%" }}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    rotateEnabled={true}
                    zoomEnabled={true}
                    initialRegion={curentPosition}
                >
                    {localisations.map(loca => {
                        let i = loca.indexOf('+')
                        let latitude = parseFloat(loca.slice(0, i))
                        let longitude = parseFloat(loca.slice(i + 1,))
                        {
                            <Marker
                                coordinate={
                                    {
                                        latitude: latitude,
                                        longitude: longitude,
                                    }
                                }
                                image={{ uri: "doctor" }}
                            >
                                <Callout
                                    style={{ height: 100, width: 100 }}
                                    image={{ uri: "doctor" }}
                                >
                                    <Text
                                        style={{
                                            height: 100,
                                            position: "relative",
                                            textAlign: "center",
                                            marginTop: -25,
                                        }}
                                    > hhhhh
                                        <Image
                                            resizeMode="contain"
                                            source={{ uri: "doctor" }}
                                            style={{
                                                width: 70,
                                                height: 70,
                                            }}
                                        />
                                    </Text>
                                </Callout>
                            </Marker>
                        }
                    }
                    )
                    }
                </MapView>
            {/* </View> */}
        </View>

    ) : <Text >Failed</Text>
};

export default LocationScreen;

const styles = StyleSheet.create({
    containre: {
        flex: 1,
    },
    views: {
        marginBottom: 15,
        marginHorizontal: 40,
        marginTop: 20
    },
});
