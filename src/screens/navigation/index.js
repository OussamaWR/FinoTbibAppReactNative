    import React from 'react'
    import { View, Text } from 'react-native'
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import ConfimEmailScreen from '../ConfirmEmailScreen/ConfirmEmailScreen';
    import SignInScreen from '../SignInScreen';
    import SignUpScreen from '../SignUpScreen';
    import ForgetPassword from '../ForgetPassword';
   import NewPasswordScreen from '../NewPasswordScreen';   
   import SignUpBusinessScreen from '../SignUpBusiness/SignUpBusinessScreen';
   import LocationScreen from '../MapsScreen/LocationScreen';
   import index from '../HomeScreen'; 
    
    const Stack = createNativeStackNavigator();
    const Navigation = () => {
        return (
         
            <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="New Password" component={NewPasswordScreen} />
                <Stack.Screen name="Confirm Email" component={ConfimEmailScreen} />
                <Stack.Screen name="Home" component={index} />
                <Stack.Screen name="SignUpBis" component={SignUpBusinessScreen} />
                <Stack.Screen  name="Localisation" component={LocationScreen} />
               
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
    export default Navigation;
    