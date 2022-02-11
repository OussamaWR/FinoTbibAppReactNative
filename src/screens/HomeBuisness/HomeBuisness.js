import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Modal, Pressable, Image, View, ScrollView, TextInput, SafeAreaView, Alert } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
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
            'http://192.168.1.112:80/Mobile%20API/getReviews.php',
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

    const Setting = () => Navigation.navigate("Setting");

    const Profile = () => Navigation.navigate("Profile");

    return (
        <ScrollView>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 32, marginBottom: 0, marginTop: 20, fontWeight: 'bold' }}> Welcome in FinoTbib  </Text>
            <ScrollView>
                {reviewData.map((review, index) =>
                    <Card key={index} >
                        <Card.Content style={{ borderWidth: 3, margin: 6, borderRadius: 30, borderColor: '#1572A1', backgroundColor: '#DFF6F0' }} >
                            <View style={{ flexDirection: "row" }} >
                                <View style={{ flex: 3 }}>
                                    <Title>{`${review.user}`}  </Title>
                                    <Paragraph>
                                        {`Comment: ${review.comment}`}
                                    </Paragraph>
                                    <Paragraph>
                                        {`Vote: ${review.vote}`}
                                    </Paragraph>
                                    <Paragraph>
                                        {`Created at : ${review.created}`}
                                    </Paragraph>
                                </View>
                                <View style={{ flex: 1 }}  >
                                    <Image source={require('../../../assets/images/doctor.png')} style={{ width: 100, height: 100, }}></Image>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                )}
            </ScrollView>
            <SafeAreaView>
                <NavBar
                    setting={Setting}
                    profil={Profile}
                ></NavBar>
            </SafeAreaView>
        </ScrollView>
    )
}

export default HomeBuisness;

