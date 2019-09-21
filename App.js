import React, {Component} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from './Screens/Loading';
import {Contact} from "./Screens/Contact";
import {Account} from "./Screens/Account";
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import Main from './Screens/Main';
import Icon from '@expo/vector-icons/Ionicons';

class App extends Component {
    render() {
        return<AppContainer />;
    }
}

const TabNavigator = createBottomTabNavigator({
    Main,
    Contact,
    Account
},{
    navigationOptions: ({ navigation }) => {
        const {routeName} = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName
        }
    }
});

const DashboardStackNavigator = createStackNavigator({
    TabNavigator: TabNavigator
},{
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={()=> navigation.openDrawer}
                    name="md-menu"
                    size={30}
                />
            )
        };
    }
});

const AppDrawerNavigator = createDrawerNavigator({
    Contact: { screen: DashboardStackNavigator}
});

const AppSwitchNavigator = createSwitchNavigator({
    Loading: { screen: Loading },
    Contact: { screen: AppDrawerNavigator },
    Account: Account,
    SignUp: SignUp,
    Login: Login,
    Main: Main
},{
    initialRouteName: 'Loading',
    headerMode: 'none'
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default App;
