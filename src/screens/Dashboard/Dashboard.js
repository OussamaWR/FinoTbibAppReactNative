import React, { useEffect, useState } from 'react'
import { Text, Image, View, ScrollView, SafeAreaView, Alert } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph } from 'react-native-paper';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const Dashboard = () => {
    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
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


            <PieChart
                data={
                    [
                        {
                          name: "Seoul",
                          population: 21500000,
                          color: "rgba(131, 167, 234, 1)",
                          legendFontColor: "#7F7F7F",
                          legendFontSize: 15
                        },
                        {
                          name: "Toronto",
                          population: 2800000,
                          color: "#F00",
                          legendFontColor: "#7F7F7F",
                          legendFontSize: 15
                        },
                        {
                          name: "Beijing",
                          population: 527612,
                          color: "red",
                          legendFontColor: "#7F7F7F",
                          legendFontSize: 15
                        },
                        {
                          name: "New York",
                          population: 8538000,
                          color: "#ffffff",
                          legendFontColor: "#7F7F7F",
                          legendFontSize: 15
                        },
                        {
                          name: "Moscow",
                          population: 11920000,
                          color: "rgb(0, 0, 255)",
                          legendFontColor: "#7F7F7F",
                          legendFontSize: 15
                        }
                      ]
                }
                width={screenWidth}
                height={220}
                chartConfig={
                    {
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                          borderRadius: 16
                        },
                        propsForDots: {
                          r: "6",
                          strokeWidth: "2",
                          stroke: "#ffa726"
                        }
                      }
                }
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
            />
        </View>
    )
}
export default Dashboard;

