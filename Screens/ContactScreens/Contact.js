import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import React, {Component} from "react";
import {Alert} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";

export class Contact extends Component {
    state = {
        text: ''
    };

    /**
     * Handles the message submission
     * @param title
     * @param message
     */
    handleSubmit = (title, message) => {
        if(this.state.text.length > 1){
        Alert.alert('Thank you for messaging in! \n We will respond ASAP', message);
        this.setState({
            text: ''
        })}
        else {
            Alert.alert('A conversation is a two\n way street', message);
        }
    };

    /**
     * Displays company information for the customer to connect to.
     */
    render() {
        return (
            <View style={styles.background}>
                    <ScrollView>
                        <Text/>
                        <Text/>
                        <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Name:</Text> Company name here</Text>
                        <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Address:</Text> Company address here</Text>
                        <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>Phone:</Text> Company phone number here</Text>
                        <Text/>
                        <Text/>
                        <Text/>
                        <Text style={styles.title}>Send us a message</Text>
                        <TextInput
                            style={styles.itemInput}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder={'Please include your email...'}
                        />
                    </ScrollView>
                <AwesomeButton width={null} stretch={true} onPress={() => this.handleSubmit()}>Add</AwesomeButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#dcddd8'
    },
    Text: {
        paddingLeft: 25,
        fontSize: 16
    },
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
