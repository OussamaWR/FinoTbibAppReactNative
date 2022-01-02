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
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
};



const LocationScreen = () => {

<<<<<<< HEAD

    const [curentPosition, setCurentPosition] = useState(initalState);



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            // alert(JSON.stringify(position))
            const { longitude, latitude } = position.coords
            setCurentPosition({
                ...curentPosition,
                latitude,
                longitude,
            })
        },

            error => alert(error.message),
=======
    const [latitudes, setLatitudes] = useState([]);
    const [longitudes, setLongitudes] = useState([]);
    const [localisations, setLocalisations] = useState([[], []]);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                alert(JSON.stringify(position));
                const { longitude, latitude } = position.coords;
                setCurentPosition({
                    ...curentPosition,
                    latitude,
                    longitude,
                });
            },
            (error) => alert(error.message),
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb
            { timeout: 20000, maximumAge: 1000 }
        );
    }, []);

    useEffect(() => {
        fetch('http://192.168.1.112:80/mobile-api/getLatitudes.php')
            .then(res => res.text())
            .then(response => setLatitudes(response.split(',')))
            .catch(err => console.warn(err))
    }, [])

<<<<<<< HEAD
    const onSave = () => {
    
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        let data = {
            latitude: curentPosition.latitude,
            longitude: curentPosition.longitude
        }
        
      
        fetch(
            'http://192.168.1.112:80/mobile-api/createBisAccount.php',
            // 'http://192.168.1.103:8080/Mobile%20API/localisationdata.php',
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            }
        )
            .catch(err => {
                console.log(err)
            })
    }






return curentPosition.latitude ? (
    <View style={styles.containre}>
        <View style={styles.views}>
            <CustomInput
                placeholder={'latitude'}
                keyboardType="numeric"
            />

            <CustomInput
                placeholder={'longitude'}
                keyboardType="numeric"
            />

            <CustomButton
                bgColor={""}
                text1={'Location'}

            /></View>

        <MapView
            provider={PROVIDER_GOOGLE}
            style={{ height: "58%" }}

            showsUserLocation={true}
            followsUserLocation={true}
            rotateEnabled={true}
            zoomEnabled={true}
            // toolbarEnabled={true}
          
            
            initialRegion={curentPosition}
        >

            
            <Marker
                
                coordinate={{ latitude: curentPosition.latitude, longitude: curentPosition.longitude }}
            // image={{uri:"test"}}

            >

                <Callout style={{ height: 100, width: 100 }}
                // image={{uri:"test"}}
                >
                    <Text style={{ height: 100, position: "relative", textAlign: 'center', marginTop: -25 }}>
                        <Image
                            resizeMode='contain'
                            source={{ uri: "test" }}
                            style={{
                                width: 70,
                                height: 70,
                            }}
                        />
                    </Text>
                    <Text>tbib l9alb</Text>


                </Callout>
            </Marker>

            <Circle
                center={{ latitude: 37.8025259, longitude: -122.4351431 }}
                radius={1000}
                fillColor={'rgba(100,100,200,0.2)'}
            />

        </MapView>
        <View style={styles.views}>
            <CustomButton
                bgColor={""}
                text1={'Save'}
                onPress={onSave}
            />
        </View>

    </View>
) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />
}

export default LocationScreen
=======
    useEffect(() => {
        fetch('http://192.168.1.112:80/mobile-api/getLongitudes.php')
            .then(res => res.text())
            .then(response => setLongitudes(response.split(',')))
            .catch(err => console.warn(err))
    }, [])



    const [curentPosition, setCurentPosition] = useState(initalState);

    return curentPosition.latitude ? (
        <View style={styles.containre}>
            <View style={styles.views}>
                <CustomInput placeholder={"latitude"} keyboardType="numeric" />

                <CustomInput placeholder={"longitude"} keyboardType="numeric" />

                <CustomButton bgColor={""} text1={"Location"} />
            </View>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: "58%" }}
                showsUserLocation={true}
                followsUserLocation={true}
                rotateEnabled={true}
                zoomEnabled={true}
                // toolbarEnabled={true}
                initialRegion={curentPosition}
            >

                <Marker
                    coordinate={{
                        latitude: curentPosition.latitude,
                        longitude: curentPosition.longitude,
                    }}
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
                        >
                            <Image
                                resizeMode="contain"
                                source={{ uri: "doctor" }}
                                style={{
                                    width: 70,
                                    height: 70,
                                }}
                            />
                        </Text>
                        <Text>tbib l9alb</Text>
                    </Callout>
                </Marker>


                <Circle
                    center={{ latitude: curentPosition.latitude, longitude: curentPosition.longitude }}
                    radius={1000}
                    fillColor={"rgba(100,10,20,0.2)"}
                />
            </MapView>
            <View style={styles.views}>
                <CustomButton bgColor={""} text1={"Save"} />
            </View>
        </View>
    ) : (
        <ActivityIndicator style={{ flex: 1 }} animating size="large" />
    );
};

export default LocationScreen;
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb

const styles = StyleSheet.create({
    containre: {
        flex: 1,
<<<<<<< HEAD

    },
    views: { marginBottom: 15, marginHorizontal: 40, marginTop: 20 }

})
=======
    },
    views: {
        marginBottom: 15,
        marginHorizontal: 40,
        marginTop: 20
    },
});
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb
