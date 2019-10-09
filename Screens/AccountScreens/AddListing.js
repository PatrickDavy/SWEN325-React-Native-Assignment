import React, { Component } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet } from 'react-native';
import { firebaseApp } from '../../Environment/Config';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Kohana } from 'react-native-textinput-effects';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AddListing extends Component {
    state = {
        Title: ' ',
        Colour: ' ',
        Description: ' ',
        ImageURL: ' ',
        Price: ' ',
        Size: ' ',
        Type: ' '
    };

    /**
     * Pushes each field to the database as a new entry
     */
    addEntry() {
        firebaseApp.database().ref('/items').push({
            Title: this.state.Title,
            Colour: this.state.Colour,
            Description: this.state.Description,
            ImageURL: this.state.ImageURL,
            Price: this.state.Price,
            Size: this.state.Size,
            Type: this.state.Type
        });
    }

    /**
     * Prints a message when the database entry has successfully been added
     * @param title
     * @param message
     */
    handleSubmit = (title, message) => {
        this.addEntry();
        Alert.alert('Item saved successfully', message);
    };

    /**
     * Displays all text inputs and a submission button
     * @returns {*}
     */
    render() {
        return (
            <ScrollView style={styles.content}>
                <View style={styles.card2}>
                    <Text style={styles.title}>Add Listing</Text>
                    <Kohana
                        style={styles.input}
                        label={'Title'}
                        iconClass={MaterialIcon}
                        iconName={'title'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ marginTop: 8, color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(Title) => { this.setState({Title})}}
                        value={this.state.Title}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Colour'}
                        iconClass={Entypo}
                        iconName={'colours'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(Colour) => this.setState({Colour})}
                        value={this.state.Colour}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Description'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'subtitles-outline'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(Description) => this.setState({Description})}
                        value={this.state.Description}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Price'}
                        iconClass={Ionicons}
                        iconName={'md-pricetag'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(Price) => this.setState({Price})}
                        value={this.state.Price}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Size'}
                        iconClass={Entypo}
                        iconName={'resize-100-'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(Size) => this.setState({Size})}
                        value={this.state.Size}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Type'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'tshirt-crew'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(Type) => this.setState({Type})}
                        value={this.state.Type}
                    />
                    <Kohana
                        style={styles.input}
                        label={'ImageURL'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'file-image'}
                        iconColor={'#5aa8d8'}
                        labelStyle={{ color: '#5aa8d8' }}
                        inputStyle={{ color: '#5aa8d8' }}
                        useNativeDriver
                        onChangeText={(ImageURL) => this.setState({ImageURL})}
                        value={this.state.ImageURL}
                    />
                </View>
                <AwesomeButton width={null} stretch={true} onPress={() => this.handleSubmit()}>Submit</AwesomeButton>
                <View style={styles.mainButton}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Main')}>Main Page</AwesomeButton>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainButton:{
        paddingTop: 30
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
