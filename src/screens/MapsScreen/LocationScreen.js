import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, Alert } from "react-native";
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
    latitudeDelta: 0.055,
    longitudeDelta: 0.055,
};


const initialLoc = [
    {
        latitude: null,
        longitude: null
    }
]




const LocationScreen = () => {

    const [latitudes, setLatitudes] = useState([]);
    const [longitudes, setLongitudes] = useState([]);
    const [length, setLength] = useState(0);



    // var i=0;
    // for(i=0;i<latitudes.length;i++){
    //     initialLoc[i].latitude=latitudes[i];
    //     initialLoc[i].longitude=longitudes[i];
    // }



    //   console.warn(items[0][1]); // 1
    // items[0].length=2;
    // items.length=latitudes.length;






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

        fetch('http://192.168.1.102:8080/Mobile%20API/getLatitudes.php')
            .then(res => res.text())
            .then(response => setLatitudes(response.split(',')))
            .catch(err => console.warn(err))

        fetch('http://192.168.1.102:8080/Mobile%20API/getLongitudes.php')
            .then(res => res.text())
            .then(response => setLongitudes(response.split(',')))
            .catch(err => console.warn(err))

        // fetch('http://192.168.1.102:8080/Mobile%20API/CountLongitudes.php')
        //     .then(res => res.text())
        //     .then(response => setLength(Number(response)))
        //     .catch(err => console.warn(err))
        
    }, [])


    const items = [

        [0, 0], [0, 0], [0, 0],[0,0]
    ];
    var i = 0
    var j = 0

    // const items = new Array(latitudes.length);
    // for (i = 0; i < items.length; i++) {

    //     items[i] = new Array(2)

    // }


    // console.log("lenght dyal daba ", items.length)

    // for (j = 0; j < 2; j++) {
    //     for (i = 0; i < longitudes.length; i++) {
    //         if (j === 0) {
    //             items[i][j] = 0;

    //         } else {
    //             items[i][j] = 0;
    //         }
    //     }
    // }




    // console.log("===================================================")
    // items.push(latitudes,longitudes);
    // console.log(items);


    for (j = 0; j < 2; j++) {
        for (i = 0; i < longitudes.length; i++) {
            if (j === 0) {
                items[i][j] = longitudes[i];

            } else {
                items[i][j] = latitudes[i];
            }
        }
    }





    console.warn(items);
    console.log(items);
    // console.warn(items[1])

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

                {items.map((item, index) =>
                    <Marker
                        coordinate={{
                            latitude: Number(item[1]),
                            longitude: Number(item[0]),
                        }}
                        key={index}
                    // image={{ uri: "doctor" }}
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
                    </Marker>)
                    }



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
