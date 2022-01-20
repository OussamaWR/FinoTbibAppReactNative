<<<<<<< HEAD
import * as React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
=======
import React from 'react'
import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    
    
    
    
    
    const Navigation = useNavigation();

   

    const Map=()=>{
      Navigation.navigate("Localisation");
    }

    const Setting =()=>{
        Navigation.navigate("Setting");
    }
    
   
      

    return (
        <View>
        <ImageBackground source={require('../../../assets/images/Back1.gif')} resizeMode="cover" style={{width:"100%",height:"100%"}}>
                  <Text style={{color:'black' , textAlign:'center',fontSize:32,marginBottom:0,marginTop:20,fontWeight:'bold'}}> Welcome in FinoTbib  </Text>
                  <Text style={{color:'black' , textAlign:'center',fontSize:12,marginBottom:20,marginTop:0,textTransform:'uppercase',}}>We wish you a speedy recovery </Text>
                  <View 
                  style={{
                    flex: 1,
                    // justifyContent: 'flex-end',
                  }}
                  ></View>
                   <NavBar
                   map={Map}
                   setting={Setting}

                    ></NavBar>
          </ImageBackground>
        </View>
    )
>>>>>>> main
}

export default HomeScreen;

// function DoctorsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Doctors !</Text>
//       </View>
//     );
//   }


// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//     return (
//       <NavigationContainer independent={true} >
//      <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Doctors" component={DoctorsScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }