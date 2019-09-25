import { View, Text, Button} from 'react-native';
import React from "react";
import {firebaseApp} from "../Environment/Config";

export class Contact extends React.Component {
    onPressButton = () => {
        console.log('PressButton');
        firebaseApp.auth().signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }));
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Contact!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Account')}
                    title={"Account"}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Main')}
                    title={"Main"}
                />
                <Button
                    onPress={() => this.onPressButton()}
                    title={"lgjfndsv"}
                />
            </View>
        );
    }
}
