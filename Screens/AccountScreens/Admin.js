import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import AddListing from "./AddListing";
import RemoveListing from "./RemoveListing";
import {firebaseApp} from "../../Environment/Config";
export default class Admin extends Component {
    render() {
        return (
            <ScrollView style={styles.card2 }>
                <Text/>
                <Text style={styles.header}>Administration</Text>
                <Text/>
                <Text style={styles.text}>Be careful when making admin changes </Text>
                <Text/>
                <Text/>
                <View style={styles.button}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('AddListing')}>Add Listing</AwesomeButton>
                </View>
                <View style={styles.button}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('RemoveListing')}>Remove Listing</AwesomeButton>
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
}
const styles = StyleSheet.create({
    text: {
        paddingLeft: 15,
        fontWeight: "bold",
        fontSize: 16
    },
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
        fontWeight: "bold",
        opacity: 0.8,
    },
    something: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
