import React from 'react'
import { Pressable, StyleSheet, Text, View, Image, DevSettings, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { useNavigation } from '@react-navigation/native';




const NavBar = ({home,map,setting,profil}) => {

     


    return (
        <View style={{
            backgroundColor: '#56ADE7',
            width: '95%',
<<<<<<< HEAD
<<<<<<< HEAD
            height: "10%",
            margin: 10,
            marginTop:-5,
=======
            height: 70,
            margin: 10,
            marginTop:-5,
           alignItems:'center',
>>>>>>> OussamaBranch
=======
            height: 70,
            margin: 10,
            marginTop:-5,
           alignItems:'center',
>>>>>>> f94e975 (up)
            padding: 10,
            borderRadius: 20,
            flexDirection: "row", justifyContent: 'space-evenly'
        }}>

<<<<<<< HEAD
<<<<<<< HEAD
            <TouchableOpacity>
=======
          
>>>>>>> OussamaBranch
=======
          
>>>>>>> f94e975 (up)
            <Pressable
                onPress={home}
            >
                <Image
                    source={require('../../../assets/images/Home.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
<<<<<<< HEAD
<<<<<<< HEAD
            </TouchableOpacity>
            <TouchableOpacity>
=======
           
>>>>>>> OussamaBranch
=======
           
>>>>>>> f94e975 (up)
            <Pressable
             onPress={map}
            >
                <Image
                    source={require('../../../assets/images/Map.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
<<<<<<< HEAD
<<<<<<< HEAD
            </TouchableOpacity>

            <TouchableOpacity>
=======
        

          
>>>>>>> OussamaBranch
=======
        

          
>>>>>>> f94e975 (up)
            <Pressable
            
            onPress={setting}>
                <Image
                    source={require('../../../assets/images/setting.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
<<<<<<< HEAD
<<<<<<< HEAD
            </TouchableOpacity>
            <TouchableOpacity>
            <Pressable
             onPress={profil}
=======
           
            
            <Pressable
               onPress={profil}
>>>>>>> OussamaBranch
=======
           
            
            <Pressable
               onPress={profil}
>>>>>>> f94e975 (up)
            >
                <Image
                    source={require('../../../assets/images/Profil.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Pressable>
<<<<<<< HEAD
<<<<<<< HEAD
            </TouchableOpacity>
=======
        
>>>>>>> OussamaBranch
=======
        
>>>>>>> f94e975 (up)
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    image: {
<<<<<<< HEAD
<<<<<<< HEAD

        marginTop: 10,
        marginLeft: 10,
=======
        width:40,
        height:40,
        marginTop: 5,
        marginLeft: 10,
        
>>>>>>> OussamaBranch
=======
        width:40,
        height:40,
        marginTop: 5,
        marginLeft: 10,
        
>>>>>>> f94e975 (up)
    }
})
