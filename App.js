import React, {Component} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Loading from './Screens/LoginScreens/Loading';
import {Contact} from "./Screens/ContactScreens/Contact";
import {Account} from "./Screens/AccountScreens/Account";
import SignUp from './Screens/LoginScreens/SignUp';
import Admin from './Screens/AccountScreens/Admin';
import Login from './Screens/LoginScreens/Login';
import Main from './Screens/MainScreens/Main';
import AddListing from "./Screens/AccountScreens/AddListing";
import RemoveListing from "./Screens/AccountScreens/RemoveListing";
import ItemComponent from "./Screens/MainScreens/Component/ItemComponent";
import AddPayment from "./Screens/PaymentScreens/Component/AddPayment";
import AddPaymentView from "./Screens/PaymentScreens/AddPaymentView";
import PaymentFormView from "./Screens/PaymentScreens/Component/PaymentFormView";
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
        Main: {
            screen: Main,

            navigationOptions: {
                tabBarLabel:"Home",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="home" size={30} color="#abd4ed" />
                )
            },
        },
        Contact: {
            screen: Contact,
            navigationOptions: {
                tabBarLabel:"Contact",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="users" size={30} color="#abd4ed" />
                )
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarLabel:"Account",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="user" size={30} color="#abd4ed" />
                )
            }
        },
    },{

    order: ['Main', 'Contact', 'Account'],
    tabBarOptions: {
        activeTintColor: '#5aa8d8',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'white',
        }
        },
    },
    );

const DashboardStackNavigator = createStackNavigator({
    TabNavigator: TabNavigator
},{
    defaultNavigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName,
        };
    }
});

const AppSwitchNavigator = createSwitchNavigator({
    Loading: { screen: Loading },
    Main: { screen: DashboardStackNavigator },
    Account: Account,
    SignUp: SignUp,
    Login: Login,
    Contact: Contact,
    AddListing: AddListing,
    RemoveListing: RemoveListing,
    Admin: Admin,
    AddSubscriptionView: AddPaymentView,
    ItemComponent: ItemComponent,
    AddSubscription: AddPayment,
    PaymentFormView: PaymentFormView,
},{
    initialRouteName: 'Loading',
    headerMode: 'none'
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default App;
