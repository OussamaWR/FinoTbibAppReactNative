import React from 'react'
import { Pressable, StyleSheet, Text, View, Image, DevSettings, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { useNavigation } from '@react-navigation/native';




const NavBar = ({home,map,setting,profil}) => {

     


    return (
        <View style={{
            backgroundColor: '#56ADE7',
            width: '95%',
            height: 70,
            margin: 10,
            marginTop:-5,
           alignItems:'center',
            padding: 10,
            borderRadius: 20,
            flexDirection: "row", justifyContent: 'space-evenly'
        }}>

          
            <Pressable
                onPress={home}
            >
                <Image
                    source={require('../../../assets/images/Home.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
           
            <Pressable
             onPress={map}
            >
                <Image
                    source={require('../../../assets/images/Map.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
        

          
            <Pressable
            
            onPress={setting}>
                <Image
                    source={require('../../../assets/images/setting.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
           
            
            <Pressable
               onPress={profil}
            >
                <Image
                    source={require('../../../assets/images/Profil.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
        
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    image: {
        width:40,
        height:40,
        marginTop: 5,
        marginLeft: 10,
        
    }
})