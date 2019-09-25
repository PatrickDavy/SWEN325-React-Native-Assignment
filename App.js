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
import AddItem from "./Screens/AddItem";

/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

class App extends Component {
    render() {
        console.disableYellowBox = true;
        return<AppContainer />;
    }
}

const TabNavigator = createBottomTabNavigator({
    Main,
    Contact,
    AddItem
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
                    onPress={()=> navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            )
        };
    }
});

const AppDrawerNavigator = createDrawerNavigator({
    Main: { screen: DashboardStackNavigator}
});

const AppSwitchNavigator = createSwitchNavigator({
    Loading: { screen: Loading },
    Main: { screen: AppDrawerNavigator },
    Account: Account,
    SignUp: SignUp,
    Login: Login,
    Contact: Contact,
    AddItem: AddItem,
},{
    initialRouteName: 'Loading',
    headerMode: 'none'
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default App;
