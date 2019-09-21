import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from "react";

export class Contact extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Contact!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Account')}
                    title={"Account niqqa"}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Main')}
                    title={"Main"}
                />
            </View>



        );
    }
}
