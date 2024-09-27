import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/backIcon.png')} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Edit Profile</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:32,

    },
    icon: {
        width: 48,
        height: 48,
        marginLeft:20,

    },
    textContainer: {
        width: '100%',
        textAlign:'center',
        position:'absolute',

    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
    },
});
