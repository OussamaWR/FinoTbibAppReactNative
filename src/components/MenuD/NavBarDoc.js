import React from 'react'
import { Pressable, StyleSheet, Text, View, Image, DevSettings, TouchableOpacity } from 'react-native'

// import { useNavigation } from '@react-navigation/native';




const NavBarDoc = ({home,map,setting,profil}) => {

     


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

          
            <TouchableOpacity
            
                activeOpacity={0.7}
                onPress={home}
            >
                <Image
                    source={require('../../../assets/images/cmt.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </TouchableOpacity>
           
            <TouchableOpacity
             onPress={map}
             activeOpacity={0.7}
            >
                <Image
                    source={require('../../../assets/images/stc.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        

          
            <TouchableOpacity
             activeOpacity={0.7}
            onPress={setting}>
                <Image
                    source={require('../../../assets/images/setting.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </TouchableOpacity>
           
            
            <TouchableOpacity
             activeOpacity={0.7}
               onPress={profil}
            >
                <Image
                    source={require('../../../assets/images/Profil.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        
        </View>
    )
}

export default NavBarDoc

const styles = StyleSheet.create({
    image: {
        width:40,
        height:40,
        marginTop: 5,
        marginLeft: 10,
        
    }
})
