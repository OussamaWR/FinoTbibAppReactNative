import React from 'react'
import { View, Text,TextInput,StyleSheet } from 'react-native'

const CustomInput = ({value,setValue,placeholder,secureTextEntry, keyboardType}) => {
    return (
        <View style={styles.container}>
           
           <TextInput 
           value={value}
           onChangeText={setValue}
           placeholder={placeholder}
           style={styles.input}
           secureTextEntry={secureTextEntry}
           keyboardType= { keyboardType}
           />
        </View> 
    )
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'#F9FBFF',
        width : '100%',
        height: 45,
        borderColor:'#293772',
        borderWidth:1,
        borderRadius:15,
        paddingHorizontal :20,
        borderWidth: 1.75,
        marginVertical:10,
        
        
        
        
    },
    input : {
        marginTop:4,
    }
})
export default CustomInput
