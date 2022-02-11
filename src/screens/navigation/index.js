
    import React from 'react'
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import SignInScreen from '../SignInScreen';
    import SignUpScreen from '../SignUpScreen';
    import ForgetPassword from '../ForgetPassword';
    import ChangePassword from '../ChangePassword';
   import SignUpBusinessScreen from '../SignUpBusiness/SignUpBusinessScreen';
   import LocationScreen from '../MapsScreen/LocationScreen';
   import HomeScreen from '../HomeScreen'; 
   import HomeBuisness from '../HomeBuisness'; 
   import WelcomeScreen from '../WelcomeScreen'; 
   import Profile from '../Profile'; 
   import Setting from '../Setting';
   import SettingD from '../SettingD';
   import ProfileD from '../ProfileD/ProfileD';


    
    const Stack = createNativeStackNavigator(); 
    const Navigation = () => {
        return (
            <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Menu" component={Drawer} /> */}
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="SettingD" component={SettingD} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="HomeDoctor" component={HomeBuisness} />
                <Stack.Screen name="HomeClient" component={HomeScreen} />
                <Stack.Screen name="Map" component={LocationScreen} />
                <Stack.Screen name="SignUpBis" component={SignUpBusinessScreen} />
                <Stack.Screen  name="Localisation" component={LocationScreen} />
                <Stack.Screen  name="Profile" component={Profile} />
                <Stack.Screen  name="ProfileD" component={ProfileD} />
          
                <Stack.Screen  name="ChangePassword" component={ChangePassword} />
                
             
            </Stack.Navigator>
            </NavigationContainer>
        )
    }

    export default Navigation;
    