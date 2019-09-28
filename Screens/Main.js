import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import ItemComponent from "../components/ItemComponent";
import { firebaseApp } from "../Environment/Config";
import { YellowBox } from "react-native";
import _ from 'lodash';
import AwesomeButton from "react-native-really-awesome-button";
let itemsRef = firebaseApp.database().ref('/items');

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message+ " ");
    }
};

export default class Main extends Component {
    state = {
        items: []
    };

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <ScrollView>
                        <ItemComponent items={this.state.items}/>

                    </ScrollView>
                </SafeAreaView>
                <AwesomeButton style={styles.confirmPurchase} width={null} stretch={true} onPress={() => this.props.navigation.navigate('AddSubscription')}>Confirm Purchase</AwesomeButton>
            </View>
        )
    }
}
Main.navigationOptions = {
    header: null,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    navigationFilename: {
        marginTop: 5,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    confirmPurchase: {
        bottom: 35
    }
});
