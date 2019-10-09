import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import PropTypes from 'prop-types';
import Icon from '@expo/vector-icons/Ionicons';

export default class ItemComponent extends Component {
    num = 0;
    constructor(props){
        super(props);
    }

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    addToCart(item) {
        this.num += item.Price;
        console.log("Price:" + this.num)
    }

    /**
     * Renders to the main page. This retrieves all the information from the database and displays it to the main page
     * @returns {*}
     */
    render() {
        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {
                    return (
                        <View style={styles.itemSpacing} key={index}>
                            <Text style={styles.itemTitle}>{item.Title}</Text>
                            <Image
                                style={styles.itemImage}
                                source={{uri: item.ImageURL}}
                            />
                            <Text style={styles.itemDescription}>{item.Type}</Text>
                            <Text style={styles.itemPrice}>${item.Price}</Text>
                            <AwesomeButton progress={true} width={null} stretch={true} onPress={() => this.addToCart(item)}><Icon
                                style={{ paddingLeft: 10 }}
                                name="md-add-circle"
                                size={30}
                            /></AwesomeButton>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemPrice:{
        paddingLeft:15,
        fontSize:20,
        fontWeight: "bold"
    },
    itemSpacing: {
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom:10
    },
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    itemTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemDescription: {
        fontSize: 16,
        textAlign: 'center'
    },
    itemImage: {
        width: 300,
        height:300
    }
});
