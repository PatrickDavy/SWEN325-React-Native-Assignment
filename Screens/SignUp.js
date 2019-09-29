import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import {firebaseApp} from "../Environment/Config";

export default class SignUp extends React.Component {
    state = { email: '', password: '', errorMessage: null };
    handleSignUp = () => {
        console.log('handleSignUp');
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }));
    };
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.headingSection}>
                        <Image source={require('../Images/userImg.png')}
                               style={{   width: 100, height: 100 }} />
                    </View>
                    <Text style={styles.heading}>Sign Up</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="Password"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <TouchableOpacity onPress={this.handleSignUp}>
                        <View style={styles.signupBtn}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.switch}>
                    <Button title="Already have an account? Login " onPress={() => this.props.navigation.navigate('Login')}/>
                    </View>
                </View>
        )
    }
}
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    switch:{
        paddingTop:20
    },
    container: {
        backgroundColor: '#5aa8d8',
        height: heightConst - 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingSection: {
        borderColor: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 35
    },
    heading: {
        color: '#fff',
        fontSize: 26,
        marginBottom: 10
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 8,
        color: '#fff'
    },
    signupBtn: {
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        width: 100,
        height: 35,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    background:{
        backgroundColor: '#dcddd8'
    }
});
