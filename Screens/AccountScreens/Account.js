import React from "react";
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { firebaseApp } from "../../Environment/Config";
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";

export class Account extends React.Component {
    adminCheck() {
        if (firebaseApp.auth().currentUser.email === 'assertionexception@gmail.com') {
            return (
                <ScrollView style={styles.card2 }>
                <Text/>
                <Text style={styles.header}>Account Details</Text>
            <Text/>
            <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Account Email:</Text> {firebaseApp.auth().currentUser.email}</Text>
        <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Address:</Text> Personal address here</Text>
        <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Phone:</Text> Personal phone number here</Text>
        <Text/>
        <Text/>
        <Text/>
        <View style={styles.button}>
        <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Admin')}>Admin</AwesomeButton>
        </View>
        <View style={styles.button}>
        <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main</AwesomeButton>
        </View>
        <View style={styles.button}>
        <AwesomeButton width={null} stretch={true} onPress={() => firebaseApp.auth().signOut().then(this.props.navigation.navigate('Login'))}>Sign out</AwesomeButton>
        </View>
        </ScrollView>
            );
        }
        else {
            return (
                <ScrollView style={styles.card2 }>
                    <Text/>
                    <Text style={styles.header}>Account Details</Text>
                    <Text/>
                    <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Account Email:</Text> {firebaseApp.auth().currentUser.email}</Text>
                    <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Address:</Text> Personal address here</Text>
                    <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Phone:</Text> Personal phone number here</Text>
                    <Text/>
                    <Text/>
                    <Text/>
                    <View style={styles.button}>
                        <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main</AwesomeButton>
                    </View>
                    <View style={styles.button}>
                        <AwesomeButton width={null} stretch={true} onPress={() => firebaseApp.auth().signOut().then(this.props.navigation.navigate('Login'))}>Sign out</AwesomeButton>
                    </View>
                </ScrollView>
            );
        }
    }

    render() {
        return(
            this.adminCheck()
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    button: {
        paddingTop: 50
    },
    content: {
        paddingBottom: 300,
    },
    card2: {
        backgroundColor: '#dcddd8',
    },
    input: {
        backgroundColor: '#f9f5ed',
        marginTop: 4,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    something: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
