import React from 'react'
import { View, Text,StyleSheet,Pressable } from 'react-native'

const CustomButton = ({onPress,text1,type='PRIMARY',bgColor,fgColor}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container ,
            styles['container_'+type] 
            ,bgColor ? {backgroundColor:bgColor}:{}
            ]}>
            <Text style={[styles.text,styles['text_'+type]
            ,fgColor ? {color:fgColor}:{},
            ]}>{text1} </Text>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    container :{
        alignItems:'center' ,
        width:'100%',
        padding:13,
        marginVertical:8,
        alignItems:'center',
        borderRadius : 15
    },
     container_PRIMARY :{ 
        backgroundColor:"#56ADE7",
    
    },
     container_TERTIARY:{
        padding:2
     },
     container_SECONDARY:{
         borderColor : "#167005",
         borderWidth : 2
     },
    text :{
            fontWeight:'bold',
            color:'white',
    },

    text_TERTIARY:{
        color:'gray',
        textDecorationLine: 'underline',
    },

    text_SECONDARY :{
        color :"#167005"
    }
})
export default CustomButton
