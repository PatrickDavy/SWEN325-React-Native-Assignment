import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';

export class Account extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Account!</Text>
                    <View>
                        <Button
                            onPress={() => this.props.navigation.navigate('Contact')}
                            title={"Contact niqqa"}
                        />
                        <Button
                        onPress={() => this.props.navigation.navigate('Main')}
                        title={"Main"}
                        />
                        <Button
                            title={"BACK"}
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>
                </View>
        );
    }
}
