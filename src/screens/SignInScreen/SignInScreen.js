import React,{useState} from 'react'
import { View, Text ,Image , StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
  

    const {height}=useWindowDimensions();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const Navigation = useNavigation();

    

    const onSignUpPressed =()=>{
        Navigation.navigate("SignUp");
    }
  
    const onSignInPressed =()=>{
            
            // validation user
            Navigation.navigate("Home");
    }
    const onForgotPasswordPressed = () =>{
        Navigation.navigate("ForgetPassword");
    }
    
    const onSignUpbisPressed = () =>{
        Navigation.navigate("SignUpBis")
    }

    return (
<ScrollView style ={{backgroundColor:"white"}}>
        <View style={styles.root}>
         
          <Image
                 source={require('../../../assets/images/logo1.png') } 
                style={styles.logo,{height : height*0.15 , marginTop : 20}} 
                resizeMode='contain'

                /> 
                <Text style={{fontSize:30 , fontWeight:'bold' ,color:'white',paddingTop:3}} > FinoTbib </Text>
        <View style ={styles.test}>
            <View  style={styles.test1}>
            <CustomInput 
                secureTextEntry={false}
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            />


            <CustomInput 
                secureTextEntry={true} 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                    
            />
            
            <CustomButton text1="Sign In" onPress={onSignInPressed} />
            <CustomButton text1="Forgot Password ?" onPress={onForgotPasswordPressed} type='TERTIARY'/>
           <Text style={{marginTop:30}} > Don't have an account ? <Text style={{  textDecorationLine: 'underline', fontWeight:'bold'}}>Create one</Text> </Text>
            <CustomButton text1="Create Personal account" onPress={ onSignUpPressed} bgColor="#FAE9E1" fgColor="#DD4D44"/>
            
            <CustomButton text1="Create Business account" onPress={onSignUpbisPressed} bgColor="#C7F9BE" fgColor="#167C05" />
         </View>
         </View>

        </View></ScrollView>
    )
   
    
}
const styles= StyleSheet.create({
    logo:{
        width:'50%',
       maxHeight:200,
       maxWidth:200, 
       
    },
    root:{
 
         backgroundColor :'#56ADE7',
        width:'100%',
        //padding:50,
        alignItems:'center'
    },

    test:{
        marginTop:30,
        borderRadius:40,
        backgroundColor:'white',
        width:"100%"
    },
    test1: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingTop:15,
        marginVertical:30,
        paddingHorizontal:30
    }
    ,
    image : {
        flex: 1,
        justifyContent: "center"
      },

});
export default SignInScreen;
