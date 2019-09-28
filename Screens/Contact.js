import {View, Text, TextInput, ScrollView, SafeAreaView, TouchableHighlight, StyleSheet, AlertIOS} from 'react-native';
import React, {Component} from "react";
import {Alert} from "react-native";

export class Contact extends Component {

    handleSubmit = (title, message) => {
        Alert.alert('Thank you for messaging in! \n We will respond ASAP', message);
    };

    render() {
        return (
            <View>
                <SafeAreaView>
                    <ScrollView>
                        <Text/>
                        <Text/>
                        <Text>Name ...</Text>
                        <Text>Company Address ...</Text>
                        <Text>Company Phone ...</Text>
                        <Text/>
                        <Text/>
                        <Text/>
                        <Text style={styles.title}>Send us a message</Text>
                        <TextInput
                            style={styles.itemInput}
                            multiline={true}
                            numberOfLines={5}
                            placeholder={'Please include your email...'}
                        />
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="grey"
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
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: "top",
        width: '90%',
        height: 250,
        padding: 4,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black'
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
