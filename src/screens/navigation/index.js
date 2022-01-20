
    import React  from 'react'
    import {Text} from 'react-native'
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import SignInScreen from '../SignInScreen';
    import SignUpScreen from '../SignUpScreen';
    import ForgetPassword from '../ForgetPassword';
   import SignUpBusinessScreen from '../SignUpBusiness/SignUpBusinessScreen';
   import LocationScreen from '../MapsScreen/LocationScreen';
   import HomeScreen from '../HomeScreen'; 
   import HomeBuisness from '../HomeBuisness'; 
   import WelcomeScreen from '../WelcomeScreen'; 
<<<<<<< HEAD
   import NavBar from '../../components/Menu/NavBar';
=======
<<<<<<< HEAD
   import NavBar from '../../components/Menu/NavBar'; 
=======
   import Setting from '../Setting';
>>>>>>> 8c92f0f07991ae31d62e42f58467c4ccca65f987
>>>>>>> main

    
    const Stack = createStackNavigator(); 
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
   

    export  {Navigation};
    