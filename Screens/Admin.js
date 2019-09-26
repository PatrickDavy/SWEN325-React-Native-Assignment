import React from "react";
import { View} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

export default class Admin extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('AddListing')}>Add Listing</AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.navigate('RemoveListing')}>Remove Listing</AwesomeButton>
                    <AwesomeButton width={null} stretch={true} onPress={() => this.props.navigation.goBack()}>Back</AwesomeButton>
            </View>
        );
    }
}
