import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import { Kohana } from 'react-native-textinput-effects';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { firebaseApp } from '../../Environment/Config';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import Icon from '@expo/vector-icons/Ionicons';

export default class RemoveListing extends Component {

    state = {
        Title: ' ',
    };

    deleteEntry(){
    firebaseApp.database().ref().child('/items').on('value', (snapshot) => {
        snapshot.forEach((child) => {
            if (child.val().Title.includes(this.state.Title)) {
                if(this.state.Title.length > 1) {
                    console.log(child.key);
                    Alert.alert('Success', 'Item removed successfully');
                    firebaseApp.database().ref().child('/items/' + child.key).remove().then(this.props.navigation.navigate('Main'));
                } else {
                    Alert.alert('Error', 'Please enter a name to be removed');
                }
            }
        });
    });
    };

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={ styles.card2 }>
                    <Text style={styles.title}>Remove Listing</Text>
                    <Kohana
                        style={styles.input}
                        label={'Title'}
                        iconClass={AntDesign}
                        iconName={'delete'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ marginTop: 8, color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(Title) => { this.setState({Title})}}
                        value={this.state.Title}
                    />
                    <View style={styles.submitButton}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.deleteEntry()}><Icon
                        style={{paddingLeft: 10}}
                        name="md-remove-circle"
                        size={30}
                    /></AwesomeButton>
                    </View>
                    <View style={styles.mainButton}>
                        <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main Page</AwesomeButton>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    submitButton:{
        paddingTop:30,
    },
    mainButton:{
        paddingTop: 100
    },
    content: {
        backgroundColor: '#dcddd8',//white dcddd8/ blue/5aa8d8
        paddingBottom: 300,
    },
    card2: {
        padding: 16,
    },
    input: {
        marginTop: 4,
    },
    title: {
        paddingTop:60,
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
});
