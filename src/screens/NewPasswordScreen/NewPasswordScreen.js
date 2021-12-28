import React,{useState} from 'react'
import { View, Text ,Image , StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const NewPasswordScreen = () => {
    
   const navigation = useNavigation();
    const [newPass,SetNewPass]=useState('');
    const [Code,SetCode]=useState('');

    const onSavePressed = () => {
        navigation.navigate("SignIn");
    }
    
    const onBackSignIn = () => {
        navigation.navigate("SignIn");
    }

    return (
<View style={{width:"100%",backgroundColor:"#56ADE7"}}>
        <View style ={styles.container}>
          <Text style={styles.title}> Reset your Password  : </Text>
          <View style={{marginHorizontal:28}}>
          <Text style={{marginLeft:10}}> Confirm code * </Text>
           
            <CustomInput 
                value={Code}
                setValue={SetCode}
                secureTextEntry={false}
                placeholder={'Confirm Code'}
                
            />
            <Text style={{marginLeft:10}}> New Password* </Text>
            <CustomInput 
                value={newPass}
                setValue={SetNewPass}
                secureTextEntry={true}
                placeholder={'New Password'}
                
            />
            <CustomButton
            text1={"Save"}
            fgColor={'white'}
            bgColor={"#167005"}
            onPress={onSavePressed}
            ></CustomButton>
              <CustomButton
            text1={"Back on Sign In"}
            type='TERTIARY'
            onPress={onBackSignIn}
            ></CustomButton>
           
             
                </View>
            </View>
        </View>
    )
   
    
}

const styles= StyleSheet.create({
    title:{
        textAlign: 'center' ,
        marginTop : 25,
        marginBottom : 40 ,
       //marginHorizontal :80,
        fontSize : 20,
        fontWeight : 'bold'
    },
    container :{
        
        marginTop :70,
        backgroundColor : 'white',
        height :" 100%",
        borderRadius : 40,

    }

});
export default NewPasswordScreen;
