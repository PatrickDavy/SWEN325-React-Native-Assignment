import React, { Component } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet } from 'react-native';
import { firebaseApp } from '../Environment/Config';
import AwesomeButton from "react-native-really-awesome-button";
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

    handleSubmit = (title, message) => {
        this.addEntry();
        Alert.alert('Item saved successfully', message);
    };

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={[styles.card2, { backgroundColor: '#b792a6' }]}>
                    <Text style={styles.title}>Add Listing</Text>
                    <Kohana
                        style={styles.input}
                        label={'Title'}
                        iconClass={MaterialIcon}
                        iconName={'title'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ marginTop: 8, color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(Title) => { this.setState({Title})}}
                        value={this.state.Title}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Colour'}
                        iconClass={Entypo}
                        iconName={'colours'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(Colour) => this.setState({Colour})}
                        value={this.state.Colour}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Description'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'subtitles-outline'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(Description) => this.setState({Description})}
                        value={this.state.Description}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Price'}
                        iconClass={Ionicons}
                        iconName={'md-pricetag'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(Price) => this.setState({Price})}
                        value={this.state.Price}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Size'}
                        iconClass={Entypo}
                        iconName={'resize-100-'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(Size) => this.setState({Size})}
                        value={this.state.Size}
                    />
                    <Kohana
                        style={styles.input}
                        label={'Type'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'tshirt-crew'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(Type) => this.setState({Type})}
                        value={this.state.Type}
                    />
                    <Kohana
                        style={styles.input}
                        label={'ImageURL'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'file-image'}
                        iconColor={'#f4d29a'}
                        labelStyle={{ color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        useNativeDriver
                        onChangeText={(ImageURL) => this.setState({ImageURL})}
                        value={this.state.ImageURL}
                    />
                </View>
                <AwesomeButton width={null} stretch={true} onPress={() => this.handleSubmit()}>Submit</AwesomeButton>

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
        backgroundColor: '#f9f5ed',
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
});
