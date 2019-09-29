import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PaymentFormView from './Component/PaymentFormView';

/**
 * The class renders a view with PaymentFormView
 */
export default class AddPaymentView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} ref={ref => (this.scrollViewRef = ref)}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.infoText}>
                            Payment includes tax and shipping
                        </Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.infoText}>
                            $250
                        </Text>
                    </View>
                    <View style={styles.cardFormWrapper}>
                        <PaymentFormView {...this.props}/>
                    </View>

                </ScrollView>
                {/* Scrolls to the payment form */}
                <KeyboardSpacer
                    onToggle={() => { setTimeout(() => this.scrollViewRef.scrollToEnd({ animated: true }),0)} }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textWrapper: {
        paddingTop: 50,
        margin: 10
    },
    infoText: {
        fontSize: 18,
        textAlign: 'center'
    },
    cardFormWrapper: {
        padding: 10,
        margin: 10
    }
});
