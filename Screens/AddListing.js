import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert,
    SafeAreaView,
    ScrollView
} from 'react-native';

import { firebaseApp } from '../Environment/Config';
this.state = { text: 'Useless Placeholder' };

let addEntry = state => {
    firebaseApp.database().ref('/items').push({
        Title: state.Title,
        Colour: '',
        Description: '',
        ImageURL: '',
        Price: '',
        Size: '',
        Type: ''
    });
};

export default class AddListing extends Component {
    state = {
        Title: '',
        Colour: '',
        Description: '',
        ImageURL: '',
        Price: '',
        Size: '',
        Type: ''
    };

    handleSubmit = (title, message) => {
        addEntry( this.state );
        Alert.alert('Item saved successfully', message);
    };

    render() {
        return (
            <View style={styles.main}>
                <SafeAreaView>
                    <ScrollView>
                        <TextInput
                            style={styles.itemInput}
                            onChangeText={(Title) => this.setState({Title})}
                            placeholder={"Add Title"}
                            value={this.state.Title}

                        />

                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="white"
                            onPress={this.handleSubmit}
                        >
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6565fc'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
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
