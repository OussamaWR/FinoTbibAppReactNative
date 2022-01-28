import React from 'react'
import { Pressable, StyleSheet, Text, View, Image, DevSettings, TouchableOpacity } from 'react-native'

// import { useNavigation } from '@react-navigation/native';




const NavBar = ({home,map,setting,profil}) => {

     


    return (
        <View style={{
            backgroundColor: '#56ADE7',
            width: '95%',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            height: "10%",
            margin: 10,
            marginTop:-5,
=======
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
            height: 70,
            margin: 10,
            marginTop:-5,
           alignItems:'center',
<<<<<<< HEAD
=======
>>>>>>> OussamaBranch
=======
            height: 70,
            margin: 10,
            marginTop:-5,
           alignItems:'center',
>>>>>>> f94e975 (up)
=======
            height: 70,
            margin: 10,
            marginTop:-5,
           alignItems:'center',
>>>>>>> OussamaBranch
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
            padding: 10,
            borderRadius: 20,
            flexDirection: "row", justifyContent: 'space-evenly'
        }}>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <TouchableOpacity>
=======
          
>>>>>>> OussamaBranch
=======
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
          
            <Pressable
=======
          
            <TouchableOpacity
            
                activeOpacity={0.7}
>>>>>>> OussamaBranch
                onPress={home}
            >
                <Image
                    source={require('../../../assets/images/Home.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
<<<<<<< HEAD
            </Pressable>
           
            <Pressable
=======
            </TouchableOpacity>
           
            <TouchableOpacity
>>>>>>> OussamaBranch
             onPress={map}
             activeOpacity={0.7}
            >
                <Image
                    source={require('../../../assets/images/Map.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
<<<<<<< HEAD
            </Pressable>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> OussamaBranch
            </TouchableOpacity>
        

<<<<<<< HEAD
            <TouchableOpacity>
=======
        

          
>>>>>>> OussamaBranch
=======
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
        

          
            <Pressable
            
=======
          
            <TouchableOpacity
             activeOpacity={0.7}
>>>>>>> OussamaBranch
            onPress={setting}>
                <Image
                    source={require('../../../assets/images/setting.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
<<<<<<< HEAD
            </Pressable>
           
            
            <Pressable
               onPress={profil}
<<<<<<< HEAD
=======
>>>>>>> OussamaBranch
=======
           
            
            <Pressable
               onPress={profil}
>>>>>>> f94e975 (up)
=======
            </TouchableOpacity>
           
            
            <TouchableOpacity
             activeOpacity={0.7}
               onPress={profil}
>>>>>>> OussamaBranch
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
            >
                <Image
                    source={require('../../../assets/images/Profil.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
<<<<<<< HEAD
            </Pressable>
        
<<<<<<< HEAD
=======
>>>>>>> f94e975 (up)
=======
            </TouchableOpacity>
        
>>>>>>> OussamaBranch
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    image: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
        width:40,
        height:40,
        marginTop: 5,
        marginLeft: 10,
        
<<<<<<< HEAD
=======
>>>>>>> f94e975 (up)
=======
        width:40,
        height:40,
        marginTop: 5,
        marginLeft: 10,
        
>>>>>>> OussamaBranch
>>>>>>> 7b34bc3ae14f08bebfb357e65ac8df84ce544792
    }
})