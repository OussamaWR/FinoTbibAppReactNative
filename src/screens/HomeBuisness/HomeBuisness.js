import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Modal, Pressable, Image, View, ScrollView, TextInput, SafeAreaView, Alert } from 'react-native'

import NavBarDoc from '../../components/MenuD/NavBarDoc';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper';



const HomeBuisness = () => {  

 
    const Navigation = useNavigation();
    const [reviewData, setReviewData] = useState([])
    const [userId, setUserId] = useState(0)
 

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(userData => {
                let userDataParsed = JSON.parse(userData)
                setUserId(userDataParsed.id)
            }) 
            .catch(err=>Alert.alert('err', JSON.parse(err))) 
    }, [reviewData]) 


    useEffect( () => {
        fetch(
            'http://192.168.1.127:8080/Mobile%20API/getReviews.php',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId
                }) 
            }
        )
            .then((res) => res.json())
            .then(res => {
                setReviewData(res)
            })
            .catch(err => console.log(err))
    }, [reviewData])

    const Setting = () => Navigation.navigate("SettingD");
    const home =()=>Navigation.navigate("HomeDoctor");
    const Profile = () => Navigation.navigate("ProfileD");
    const Map = () => Navigation.navigate("Dashboard");

    return (
        <View>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 32, marginBottom: 0, marginTop: 20, fontWeight: 'bold' }}> Welcome in FinoTbib  </Text>
            <Text  style={{ color: 'black', textAlign: 'center', fontSize: 20, marginTop: 20, fontWeight: '500', marginBottom:10}} >people's opinion of you</Text>
            <ScrollView style={{ height: '78%' }}>
                {reviewData.map((review, index) =>
                    <Card key={index} >
                        <Card.Content style={{ borderWidth: 3, margin: 6, borderRadius: 30, borderColor: '#1572A1', backgroundColor: '#DFF6F0' }} >
                            <View style={{ flexDirection: "row" }} >
                                <View style={{ flex: 3 }}>
                                <View style={{flexDirection:'row'}}>
                                <View style={{alignItems:'center',borderRadius: 20, width: 35, height: 35,marginRight:7,borderWidth:3,borderColor:'#0083FF'}}><Image source={require('../../../assets/images/user.png')} resizeMode='contain' style={{ width: 35, height: 35,marginTop:-2.5}} /></View>
                                    <Title style={{fontSize:15}}>{`${review.user}`}  </Title>
                                     <Text style={{fontSize:13,textDecorationLine:'underline',marginTop:8}}>
                                        ({`${review.created}`.substring(0,10)})
                                    </Text></View>

                                    <View style={{flexDirection:'row',margin:10}}>
                                    <Image source={require('../../../assets/images/comment.png')} resizeMode='contain' style={{ width: 25, height: 25,marginRight:7,}} />
                                       <Text>{` ${review.comment}`}</Text> 
                                    </View>
                                    <View style={{flexDirection:'row',margin:7}}>
                                    <Image source={require('../../../assets/images/review1.png')} resizeMode='contain' style={{ width: 25, height: 25,marginRight:5}} />
                                       <Text>{` ${review.vote}/10`}</Text> 
                                    </View>
                                    
                                   
                                </View>
                                <View style={{ flex: 1 }}  >
                                    <Image source={require('../../../assets/images/doctor.png')} style={{ width: 100, height: 100, }}></Image>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                )}
            </ScrollView>
            <View style={{ height: '20%', alignItems: 'center', paddingTop: 10 }}>
            <NavBarDoc
                    map={Map}
                    setting={Setting}
                    profil={Profile}
                    home={home}
                ></NavBarDoc>
            </View>
        </View>
    )
}

export default HomeBuisness;