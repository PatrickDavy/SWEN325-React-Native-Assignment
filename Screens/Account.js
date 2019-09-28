import React from "react";
import { View} from 'react-native';
import { firebaseApp } from "../Environment/Config";
import AwesomeButton from "react-native-really-awesome-button";

export class Account extends React.Component {
    adminCheck() {
        if (firebaseApp.auth().currentUser.email === 'assertionexception@gmail.com') {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Admin')}>Admin</AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main</AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => firebaseApp.auth().signOut().then(this.props.navigation.navigate('Login'))}>Sign out</AwesomeButton>

                </View>
            );
        }
        else {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main</AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => firebaseApp.auth().signOut().then(this.props.navigation.navigate('Login'))}>Sign out</AwesomeButton>

                </View>
            );
        }
    }

    render() {
        return(
            this.adminCheck()
            );
    }
}
