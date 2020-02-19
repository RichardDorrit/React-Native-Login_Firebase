import React,{Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import firebase from 'firebase';

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.homeContainer}>
                <Text style={styles.heading}>
                    Welcome to Richards App demo
                </Text>
                <Text style={styles.content}>
                    You are successfully loggedin!
                </Text>
                <TouchableOpacity style={{padding:20}} onPress={() => firebase.auth().signOut()}>
                    <Text style={{color: '#1B9CFC'}}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeContainer:{
        padding:10,
        borderBottomColor:'rgba(255,255,255,0.6)',
        borderBottomWidth: 5,
    },
    heading:{
        fontSize: 20,
        color: 'black',
        padding: 10,
        marginBottom: 10
    },
    content:{
        marginTop: 10,
        fontSize: 18,
    }
})

export default Home;