import React ,{useState} from 'react'
import { StyleSheet, Text, View , ScrollView , TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
// import { auth } from '../../../firebase';

const SignUpBusinessScreen = () => {
    const [selectedValue, setSelectedValue] = useState("");
    
    const navigation = useNavigation();
    const [username,setUsername]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordRepeat,setPasswordRepeat]=useState('');
    // const handleSingUp=()=>{
    //     auth
    //     .createUserWithEmailAndPassword(email,password)
    //     .then(userCredentials=>{
    //         const user = userCredentials.user;
    //         console.warn(user.email);
    //     })
    //     .catch(error=>alert(error.message))
        
    // }

    const onRegisterPressed =()=>{
            // handleSingUp();
           navigation.navigate("Localisation");
    }
    const Terms = () =>{
        console.warn("Terms the use");
    }
    const policy= () =>{
        console.warn("Policy");
    }
    const onSignUpPressed = () =>{
        navigation.navigate("SignIn");
    }
  


    return (
        <ScrollView style ={{backgroundColor:"white"}}>
            <View style={styles.root}>
         
         <Text style={styles.title}> Create an account </Text> 

         <Text style={{fontSize:30 , fontWeight:'bold' ,color:'white'}} > FinoTbib </Text>
 <View style ={styles.test}>
     <View  style={styles.test1}>
     <CustomInput 
         secureTextEntry={false}
         placeholder="Full Name" 
         value={username} 
         setValue={setUsername}
     />
     <CustomInput 
         secureTextEntry={false}
         placeholder="Email" 
         value={email} 
         setValue={setEmail}
     />
     <Text style={{color:'gray' , marginBottom:5, marginLeft:-215}}>Votre Spicialité : </Text>
     <View style={styles.Border}
         
         >
        <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width:"100%" , }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
      >
        <Picker.Item label="karch" value="karch" />
        <Picker.Item label="l9alb" value="l9alb" />
        <Picker.Item label="tanafos" value="tanafos" />
        <Picker.Item label="mafasil" value="mafasil" />
        <Picker.Item label="daher" value="daher" />
      </Picker></View>

      <TextInput
         style={styles.Border}
         placeholder="Phone" 
         value={phone} 
         setValue={setPhone}
         keyboardType="numeric"
         
     />
     <CustomInput 
         secureTextEntry={true} 
         placeholder="Password" 
         value={password} 
         setValue={setPassword}
             
     />
     <CustomInput 
         secureTextEntry={true} 
         placeholder="Repeat Password" 
         value={passwordRepeat} 
         setValue={setPasswordRepeat}
             
     />
   
     
     <CustomButton text1="Register" onPress={onRegisterPressed} />
   
     <Text style={styles.text}>By Registring , you cofirm that you accepte our<Text onPress={Terms} style={styles.regl}> Terms of Use </Text> and <Text onPress={policy} style={styles.regl}> Privacy Policy</Text></Text>
     <Text style={styles.text}> Have an account ?</Text>
     <CustomButton text1="Sign In" onPress={onSignUpPressed} fgColor='white' bgColor="#18CC05"/>
     
  </View>
  </View>

 </View>
        </ScrollView>
    )
}

export default SignUpBusinessScreen

const styles = StyleSheet.create({
    regl:{ 
        textDecorationLine: 'underline',
         fontWeight:'bold',
         color :"#041C60"
       },

   root:{
        
        backgroundColor :"#56ADE7",
       width:'100%',
       //padding:50,
       alignItems:'center'
   },

   test:{
       marginTop:10,
       borderRadius:40,
       backgroundColor:'white',
       width:"100%"
   },
   test1: {
       width:'100%',
       height:'100%',
       alignItems:'center',
       paddingTop:5,
       marginVertical:60,
       paddingHorizontal:30
   }
   ,
   image : {
       flex: 1,
       justifyContent: "center"
     },
     title:{
         fontSize:24,
         fontWeight:'bold',
         color :"#041C60",
         margin:10,
     }
     ,
     text:{
         
         color:'gray',
         marginVertical:12
     },
     Border:{ 
        borderColor : "#293772",
        borderWidth :1.75,
        width : "100%",
        height:45,
        borderRadius:15,
        marginBottom:15,
        paddingHorizontal :20,
        backgroundColor :"#F9FBFF"
        }

})
