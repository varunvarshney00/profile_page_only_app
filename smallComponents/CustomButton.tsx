import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomButton = () => {
    return (
        <>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Update</Text>
            </View>
        </>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 368,
        height: 60,
        borderRadius: 16,
        backgroundColor: '#000080',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 26,
    },
});
