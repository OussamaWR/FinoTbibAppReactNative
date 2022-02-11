import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Modal, Pressable, Image, View, ScrollView, TextInput, SafeAreaView, Alert } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';

const HomeScreen = () => {


    const Navigation = useNavigation();
    const [doctorData, setDoctorData] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [comment, setComment] = useState('')
    const [vote, setVote] = useState(0)
    const [userId, setUserId] = useState(0)


    useEffect(() => {
        fetch('http://192.168.1.105:8080/Mobile%20API/getDoctors.php')
            .then((res) => res.json())
            .then(res => setDoctorData(res))
            .catch(err => console.log(err))
    }, [doctorData])

    useEffect(
        async () => {
            try {
                const userData = await AsyncStorage.getItem('user')
                let userDataParsed = JSON.parse(userData)
                setUserId(userDataParsed.id)
            } catch (err) {
                Alert.alert('err', JSON.parse(err))
            }
        }, [])



    const onChangeSearch = query => setSearchQuery(query);




    const OnsearchPress = () => {
        if (searchQuery != '') {
            setDoctorData(doctorData.filter(doctor => doctor.fullname === searchQuery))
        }
    }


    const Map = () => Navigation.navigate("Map");


    const Setting = () => Navigation.navigate("Setting");


    const Profile = () => Navigation.navigate("Profile");



    return (
        <View>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 32, marginBottom: 0, marginTop: 20, fontWeight: 'bold' }}> Welcome in FinoTbib  </Text>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 12, marginBottom: 20, marginTop: 0, textTransform: 'uppercase', }}>We wish you a speedy recovery </Text>

            <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 3 }} >
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{ borderRadius: 10, marginLeft: 17, marginRight: 7 }}
                    />
                </View>

                <View style={{ width: '20%', marginTop: -6, marginRight: 15 }}>
                    <CustomButton
                        text1={'GET'}
                        onPress={OnsearchPress}
                    />
                </View>


            </View>
            <ScrollView style={{ height: '75%' }}>
                {doctorData.map((doctor, index) =>
                    <Card key={index} >
                        <Card.Content style={{ borderWidth: 3, margin: 6, borderRadius: 30, borderColor: '#1572A1', backgroundColor: '#DFF6F0' }} >
                            <View style={{ flexDirection: "row" }} >
                                <View style={{ flex: 3 }}>
                                    <Title>{`${doctor.fullname}`}  </Title>
                                    <Paragraph>
                                        {`Spiciality: ${doctor.speciality}`}
                                    </Paragraph>

                                    <Card.Actions>
                                        <Button
                                            onPress={() => {
                                                Alert.alert(doctor.fullname,
                                                    'FullName : ' + doctor.fullname + '\n'
                                                    + 'Spiciality: ' + doctor.speciality + '\n'
                                                    + 'Phone : ' + doctor.phone
                                                )
                                            }}
                                            style={{ backgroundColor: '#2EA1D9', }} >
                                            <Text style={{ color: 'white' }} >Read More</Text>
                                        </Button>
                                        <View >
                                            <Modal
                                                animationType="slide"
                                                transparent={true}
                                                visible={modalVisible}
                                                onRequestClose={() => {
                                                    setModalVisible(!modalVisible);
                                                }}
                                            >
                                                <View style={styles.centeredView}>
                                                    <View style={styles.modalView}>
                                                        <TextInput
                                                            style={styles.Input}
                                                            placeholder='Comment...'
                                                            value={comment}
                                                            onChangeText={setComment}
                                                        />
                                                        <TextInput
                                                            style={styles.Input}
                                                            placeholder='Vote.../10'
                                                            value={vote}
                                                            keyboardType="numeric"
                                                            onChangeText={setVote}
                                                        />
                                                        <Button
                                                            style={[styles.button, styles.buttonClose]}
                                                            onPress={() => {
                                                                if (comment === '' || vote === 0) {
                                                                    Alert.alert('Error', 'fill all fields first  !')
                                                                } else {
                                                                    let headers = {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    }
                                                                    let data = {
                                                                        userId: userId,
                                                                        doctorId: doctor.id,
                                                                        comment: comment,
                                                                        vote: vote
                                                                    }
                                                                    fetch(
                                                                        'http://192.168.1.105:8080/Mobile%20API/reviewDoctor.php',
                                                                        {
                                                                            method: 'POST',
                                                                            headers: headers,
                                                                            body: JSON.stringify(data)
                                                                        }
                                                                    )
                                                                        .then(res => res.text())
                                                                        .then(res => {
                                                                            if (res === 'Data Inserted') {
                                                                                setModalVisible(!modalVisible)
                                                                                setVote(0)
                                                                                setComment('')
                                                                                Alert.alert("Review", 'Review Added')
                                                                            }
                                                                        })
                                                                        .catch(err => Alert.alert('Error', JSON.stringify(err)))
                                                                }
                                                            }}
                                                        >
                                                            <Text style={styles.textStyle}>Submit & Close</Text>
                                                        </Button>
                                                    </View>
                                                </View>
                                            </Modal>
                                            <Button onPress={() => setModalVisible(true)} style={{ backgroundColor: '#2EA1D9', marginLeft: 4 }} ><Text style={{ color: 'white' }} >Review</Text></Button>
                                        </View>
                                    </Card.Actions>
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
                <NavBar
                    map={Map}
                    setting={Setting}
                    profil={Profile}
                ></NavBar>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    Input: {
        borderBottomWidth: 1,
        margin: 5,
        borderBottomColor: 'blue'
    }
});
export default HomeScreen;

