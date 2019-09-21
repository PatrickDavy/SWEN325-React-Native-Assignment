import React from 'react'
import { Alert, Platform, Image, View, Text, StyleSheet, Button } from 'react-native';
import { firebaseAuth } from '../Environment/Config';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: null, errorMessage: null }
    }
    componentDidMount() {
        const { currentUser } = firebaseAuth;
        this.setState({ currentUser })
    }
    onPressButton = () => {
        console.log('PressButton');
        firebaseAuth.signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }));
    };
    render() {


        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
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
