import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { firebaseApp } from '../../Environment/Config'
export default class Loading extends React.Component {
    /**
     * Detects if the current user is logged in. If they are logged in then they are directed to the Main page else
     * the user is directed to the Login Page
     */
    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Login')
        })
    }

    /**
     * Displays a loading message with a rotating circle.
     * @returns {*}
     */
    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
