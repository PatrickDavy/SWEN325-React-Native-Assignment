import React from "react";
import { View} from 'react-native';
import { firebaseApp } from "../Environment/Config";
import AwesomeButton from "react-native-really-awesome-button";

export class Account extends React.Component {
    onPressButton = () => {
        console.log('PressButton');
        firebaseApp.auth().signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }));
    };
    switch() {
        if (firebaseApp.auth().currentUser.email === 'assertionexception@gmail.com') {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Admin')}>Admin</AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main</AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.onPressButton}>Sign out</AwesomeButton>
                </View>
            );
        }
        else {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View>
                        <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main</AwesomeButton>
                        <AwesomeButton width={null} stretch={true} onPress={() => this.onPressButton}>Sign out</AwesomeButton>
                    </View>
                </View>
            );
        }
    }

    render() {
        return(
            this.switch()
            );
    }
}
