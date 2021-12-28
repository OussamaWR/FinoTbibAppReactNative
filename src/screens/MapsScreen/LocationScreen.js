import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import MapView ,{PROVIDER_GOOGLE,Marker,Callout,Circle} from 'react-native-maps'


const LocationScreen = () => {



    return (
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
            style={{height:"58%" }}

                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
              >

               
                    <Marker
                coordinate={{latitude:37.8025259, longitude:-122.4351431}}
                >
                    <Callout>  
                    
                   {/* <Text style={{ height: 100, position: "relative", textAlign:'center' , backgroundColor:'gray',marginTop:-25}}> */}
                    <Image
                     resizeMode= 'contain'
                      source={ require("../../../assets/images/tabib.jpg")}
                      style={{
                        width:70,
                        height: 90,
                        // resizeMode:'contain'
                        
                      }}
                    />
                    {/* </Text> */}
                    <Text>
                        tbib l9alb
                    </Text>
                    
               
                    </Callout>
                    


                </Marker>

                    <Circle 
                        center={{latitude:37.8025259,longitude:-122.4351431}}
                        radius={1000}
                        fillColor={'rgba(100,100,200,0.2)'}
                    />

              </MapView>
                <View style={styles.views}>
                <CustomButton
            bgColor={""}
            text1={'Save'}
            
            />
                </View>

        </View>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    containre:{
        flex:1,
       
    },
    views:{marginBottom:15 , marginHorizontal :40, marginTop:20}
    
})
