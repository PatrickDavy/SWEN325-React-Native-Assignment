import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import PropTypes from 'prop-types';

let num = 0;

export default class ItemComponent extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    printACunny(item) {
        console.log(item);
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
                            <AwesomeButton width={null} stretch={true}>Purchase</AwesomeButton>
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
