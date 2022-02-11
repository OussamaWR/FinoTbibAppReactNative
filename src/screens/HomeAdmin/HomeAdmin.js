import React, { useEffect, useState } from 'react'
import { Text, Image, View, ScrollView, SafeAreaView, Alert } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph } from 'react-native-paper';
import NavBarDoc from '../../components/MenuD';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const HomeAdmin = () => {
    const Navigation = useNavigation();
    const Setting = () => Navigation.navigate("SettingD");
    const Home = () => Navigation.navigate("HomeDoctor");
    const Profile = () => Navigation.navigate("ProfileD");
    const Map = () => Navigation.navigate("Dashboard");
    return (
        <View>
        <View style={{height:'91.5%'}}>
          
          <View
            style={{ flexDirection: 'row', marginBottom: 50, backgroundColor: '#56ADE7', paddingTop: 7, paddingBottom: 7 }}
          >
            <Text style={{ marginLeft: 60, fontWeight: 'bold', fontSize: 25, color: 'white' }}>Statistics</Text>
          </View>
  <View style={{marginTop:70}}>
  
          <LineChart
        
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#EAEAEA",
              backgroundGradientFrom: "#DACC96",
              backgroundGradientTo: "#5800FF",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              margin: 20
            }}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: '#502064' }}>Doctors Per Month</Text>
  
  
          <BarChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width - 40} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#4C0027",
              backgroundGradientFrom: "#BAFFB4",
              backgroundGradientTo: "#1572A1",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#4C0027"
              }
            }}
            style={{
              marginVertical: 10,
              borderRadius: 16,
              margin: 20
            }}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: '#219F94' }}>Clients Per Month</Text>
        </View>
  </View>
        <NavBarDoc
          map={Map}
          setting={Setting}
          home={Home}
          profil={Profile}
        ></NavBarDoc>
  
  
  
  
      </View>
    )
}
export default HomeAdmin;

