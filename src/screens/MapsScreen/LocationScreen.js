import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, Alert, Picker, ScrollView, Dimensions } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import NavBar from "../../components/Menu/NavBar";
import { useNavigation } from '@react-navigation/native';
import Carousel from "react-native-snap-carousel";
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

    const [localisations, setLocalisations] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [specialities, setSpecialities] = useState([]);
    const [speciality, setSpeciality] = useState('');
    const [curentPosition, setCurentPosition] = useState(initalState);



    const get = () => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        let data = {
            speciality: speciality,
        }
        fetch(
            'http://192.168.1.105:80/Mobile%20API/getLocalisations.php',
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            }
        )
            .then(res => res.json())
            .then(res => {
                setLocalisations(res)
                console.log("a9a 9a 9a 9a9aaaaaaaaa", localisations);
            })
            .catch(err => {
                console.log(err) 
            })



    }






    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                //alert(JSON.stringify(position));
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

        fetch('http://192.168.1.105:80/Mobile%20API/getSpecialities.php')
            .then(res => res.text())
            .then(response => setSpecialities(response.split(',')))
            .catch(err => console.warn(err)) 
    }, [])


    const mapView = useRef();
    const refMarks = useRef();
    const markers = [];
    const onCarouselItemChange = (index) => {
        let location = localisations[index];
        mapView.current.animateToRegion({
            latitude: Number(location.latitude),
            longitude: Number(location.longitude),
            latitudeDelta: 0.020,
            longitudeDelta: 0.020,
        })
        markers[index].showCallout();

    }
    const carouselRef = useRef(null);


    const Navigation = useNavigation();
    const HomePress = () => {
        Navigation.navigate("HomeClient");
    }
    const Setting = () => {
        Navigation.navigate("Setting");
    }

    const call = () => {
        // RNImmediatePhoneCall.immediatePhoneCall('0123456789');
        console.warn("call")
    }
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.carsouls1}>
                <View style={{ width: '100%', backgroundColor: 'black', borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>{item.fullname}</Text></View>
                <View style={styles.carsouls}>
                    <Image source={require('../../../assets/images/doctor.png')} style={{ height: 70, width: 70 }} />
                    <View style={{ alignItems: 'center' }}>

                        <Text style={{ color: 'white' }}>{item.description}</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }} >Review : 8.5/10</Text>
                        <View style={{ width: '70%' }}>
                            <CustomButton
                                text1={'Call'}
                                bgColor={'#0EC315'}
                                onPress={call}
                            /></View>
                    </View>


                </View>
            </View>
        );
    }



    return curentPosition.latitude ? (
        <View style={styles.containre}>
            <Text style={{ marginBottom: 10,marginTop:15,marginLeft:20 }}>Choose the spiciality that you want : </Text>
            <View style={styles.views}>

                <View style={styles.Border}>

                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 40, width: "100%", }}
                        onValueChange={(itemValue) => {
                            setSpeciality(itemValue)
                            setSelectedValue(itemValue)
                        }}
                    >
                        {specialities.map(spe => <Picker.Item label={spe} key={spe} value={spe} />)}
                    </Picker>

                </View>
                <View style={{ width: '20%', marginTop: -10, marginLeft: 15 }}>
                    <CustomButton
                        text1={'GET'}
                        onPress={get}
                    />
                </View>
            </View> 
            <MapView
                ref={mapView}
                provider={PROVIDER_GOOGLE}
                style={{ height: "50%" }}
                showsUserLocation={true}
                followsUserLocation={true}
                rotateEnabled={true}
                zoomEnabled={true}
                initialRegion={curentPosition}
            >

                {localisations.map((loca, index) =>
                    <Marker
                        coordinate={{
                            latitude: Number(loca.latitude),
                            longitude: Number(loca.longitude),
                        }}
                        key={index}
                        ref={ref => markers[index] = ref}
                        image={require('../../../assets/images/Mark5.png')}

                    >
                        <Callout>
                            <Text style={{ fontSize: 15, marginBottom: 5, textAlign: 'center', fontWeight: 'bold' }}>{loca.fullname}</Text>
                        </Callout>


                    </Marker>)
                }


                <Circle
                    center={{ latitude: curentPosition.latitude, longitude: curentPosition.longitude }}
                    radius={1000}
                    fillColor={"rgba(100,10,20,0.2)"}
                />
            </MapView>


            <Carousel
                ref={carouselRef}

                data={localisations}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={300}
                onSnapToItem={(index) => onCarouselItemChange(index)}
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',


                }}
            ></View>


            <NavBar
                home={HomePress}
                setting={Setting}
            ></NavBar>

        </View>

    ) : <Text >Failed</Text>
};

export default LocationScreen;

const styles = StyleSheet.create({
    containre: {
        flex: 1,
    },
    views: {
        marginBottom: 5,
        marginHorizontal: 20,
        marginTop: 5,
        flexDirection: 'row'
    },
    Border: {
        borderColor: "#293772",
        borderWidth: 1.75,
        width: "65%",
        height: 45,
        borderRadius: 15,
        // marginBottom: 0,
        // paddingHorizontal: 20,
        backgroundColor: "#F9FBFF"
    }
    ,
    image: {
        width: 120,
        height: 80,

    }
    , carsouls: {
        paddingTop: 7,
        flexDirection: 'row',
        backgroundColor: '#007a87',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    }, 
    carsouls1: {

        width: "85%",

        alignItems: 'center',
        marginTop: 10,
    }

});
