import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button} from 'native-base'
import ItemComponent from "../components/ItemComponent";
import { YellowBox } from "react-native";
import _ from 'lodash';
import { firebaseApp } from "../Environment/Config";
let itemsRef = firebaseApp.database().ref('/items');

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};
export default class Main extends Component {
    dataState = {
        items: []
    };

    constructor(props) {
        super(props);
        this.userState = { currentUser: null, errorMessage: null };
    }
    componentDidMount() {
        // const { currentUser } = firebaseApp.auth();
        // this.setState({ currentUser });
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }
    onPressButton = () => {
        console.log('PressButton');
        firebaseApp.auth().signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        const { currentUser } = this.userState;
        return (
            <View style={styles.container}>
                {/*{this.dataState.items.length > 0 ? (*/}
                {/*    <ItemComponent items={this.dataState.items} />*/}
                {/*) : (*/}
                {/*    <Text>No items</Text>*/}
                {/*)}*/}
                {/*<Text>*/}
                {/*    Hi {currentUser && currentUser.email}!*/}
                {/*</Text>*/}
                <View>
                    <Button
                        onPress={this.onPressButton}
                        title="Sign Out"
                    />
                </View>
                <View>
                    <Button
                        onPress={() => this.props.navigation.navigate('Contact')}
                        title={"Contact!"}
                    />
                </View>
                <View>
                    <Button
                        onPress={() => this.props.navigation.navigate('Account')}
                        title={"Account!"}
                    />
                </View>
            </View>

        )}
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
    }
});
