import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";

export default class Cart extends Component{

    render() {
        return (
            <View style={styles.container}>

                <AwesomeButton width={null} stretch={true}
                               onPress={() => this.props.navigation.navigate('AddSubscription')}>
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


