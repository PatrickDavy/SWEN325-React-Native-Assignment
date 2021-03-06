import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import ItemComponent from "./Component/ItemComponent";
import { firebaseApp } from "../../Environment/Config";
import { YellowBox } from "react-native";
import _ from 'lodash';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
let itemsRef = firebaseApp.database().ref('/items');
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

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

    /**
     * calls the Item component to render all firebase entries. and displays a confirm button below all items
     * @returns {*}
     */
    render() {
        return (
            <View style={ styles.card2 }>
                    <ScrollView>
                        <ItemComponent items={this.state.items}/>

                    </ScrollView>
                    <AwesomeButton style={styles.confirmPurchase} width={null} stretch={true} onPress={() => this.props.navigation.navigate('AddSubscription')}>Confirm Purchase</AwesomeButton>

            </View>
        )
    }
}
Main.navigationOptions = {
    header: null,
};
const styles = StyleSheet.create({
    card2: {
        backgroundColor: '#dcddd8',
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
        paddingTop: 50,
    }
});
//        backgroundColor: '#70cdc6',
