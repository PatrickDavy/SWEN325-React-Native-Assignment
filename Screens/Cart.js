import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

export default class Cart extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Text>Pee pee Vagina</Text>
                <AwesomeButton width={null} stretch={true}
                               onPress={() => this.props.navigation.navigate('ConfirmPurchase')}>
                    Confirm
                </AwesomeButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


