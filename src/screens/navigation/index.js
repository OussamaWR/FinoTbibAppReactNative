
    import React from 'react'
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import SignInScreen from '../SignInScreen';
    import SignUpScreen from '../SignUpScreen';
    import ForgetPassword from '../ForgetPassword';
   import SignUpBusinessScreen from '../SignUpBusiness/SignUpBusinessScreen';
   import LocationScreen from '../MapsScreen/LocationScreen';
   import HomeScreen from '../HomeScreen'; 
   import HomeBuisness from '../HomeBuisness'; 
   import WelcomeScreen from '../WelcomeScreen'; 
   import Setting from '../Setting';

    
    const Stack = createNativeStackNavigator(); 
    const Navigation = () => {
        return (
            <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Menu" component={Drawer} /> */}
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="HomeDoctor" component={HomeBuisness} />
                <Stack.Screen name="HomeClient" component={HomeScreen} />
                <Stack.Screen name="SignUpBis" component={SignUpBusinessScreen} />
                <Stack.Screen  name="Localisation" component={LocationScreen} />
             
            </Stack.Navigator>
            </NavigationContainer>
        )
    }

    export default Navigation;
    