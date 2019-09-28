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
import { firebaseApp } from '../Environment/Config';
import AwesomeButton from "react-native-really-awesome-button";
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
                    Alert.alert('Error', 'Please a name to be removed');
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
                <View style={[styles.card2, { backgroundColor: '#b792a6' }]}>
                    <Text style={styles.title}>Remove Listing</Text>
                    <Kohana
                        style={styles.input}
                        label={'Title'}
                        iconClass={AntDesign}
                        iconName={'delete'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ marginTop: 8, color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(Title) => { this.setState({Title})}}
                        value={this.state.Title}
                    />
                    <AwesomeButton width={null} stretch={true} onPress={() => this.deleteEntry()}><Icon
                        style={{ paddingLeft: 10 }}
                        name="md-remove-circle"
                        size={30}
                    /></AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main Page</AwesomeButton>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: 'white',
    },
    content: {
        paddingBottom: 300,
    },
    card2: {
        padding: 16,
    },
    input: {
        marginTop: 4,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6565fc'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});
