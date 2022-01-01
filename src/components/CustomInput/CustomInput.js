import React from 'react'
import { View, Text,TextInput,StyleSheet } from 'react-native'

<<<<<<< HEAD
const CustomInput = ({value,setValue,placeholder,secureTextEntry, keyboardType}) => {
=======
const CustomInput = ({value,setValue,placeholder,secureTextEntry,keyBaordInput}) => {
>>>>>>> f41627b586fe9b9594bf6207797645881ea642e5
    return (
        <View style={styles.container}>
           
           <TextInput 
           value={value}
           onChangeText={setValue}
           placeholder={placeholder}
           style={styles.input}
           secureTextEntry={secureTextEntry}
<<<<<<< HEAD
           keyboardType= { keyboardType}
=======
           keyboardType={keyBaordInput}
            
>>>>>>> f41627b586fe9b9594bf6207797645881ea642e5
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
