import React, {Component} from "react";
import { View} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import {Account} from "./Account";
import AddListing from "./AddListing";
import RemoveListing from "./RemoveListing";
export default class Admin extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('AddListing')}>Add Listing</AwesomeButton>
                <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('RemoveListing')}>Remove Listing</AwesomeButton>
                <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.goBack()}>Back</AwesomeButton>
                <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('Account')}>Acc</AwesomeButton>
            </View>
        );
    }
}
