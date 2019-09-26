import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
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

    render() {
        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={styles.itemTitle}>{item.Title}</Text>
                            <Image
                                style={styles.itemImage}
                                source={{uri: item.ImageURL}}
                            />
                            <Text style={styles.itemDescription}>{item.Type}</Text>
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
