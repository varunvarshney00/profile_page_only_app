import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { launchCamera, launchImageLibrary, MediaType } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { openSettings, Permission, PERMISSIONS } from 'react-native-permissions';
import { request } from 'react-native-permissions';

interface ModalButtonsProps {
    setSelectedImage: (uri: string) => void;
}

const ModalButtons: React.FC<ModalButtonsProps> = ({ setSelectedImage }) => {

    const [galleryValue, setGalleryValue] = useState<number>(0);



    const askForPermissions = (permission: Permission) => {
        request(permission).then((result) => {
            console.log('result====>', result);
            if (result === 'granted') {
                if (galleryValue === 1) {
                    handleGalleryOpen();
                } else if (galleryValue === 2) {
                    handleCameraOpen();
                }
            } else if (result === 'blocked') {
                Alert.alert(
                    'Permission Blocked',
                    'You need to enable permissions in your app settings.',
                    [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Open Settings', onPress: () => openSettings() },
                    ]
                );
            }
        });
    };

    const saveImageUri = async (uri: string) => {
        try {
            await AsyncStorage.setItem('userImage', uri);
        } catch (error) {
            console.log('Error saving image', error);
        }
    };

    useEffect(() => {
        const loadImage = async () => {
            try {
                const storedImageUri = await AsyncStorage.getItem('userImage');
                if (storedImageUri) {
                    setSelectedImage(storedImageUri);
                }
            } catch (error) {
                console.log('Error loading image', error);
            }
        };
        loadImage();
    }, [setSelectedImage]);

    const handleCameraOpen = () => {
        const options = {
            mediaType: 'photo' as MediaType,
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorCode);
            } else if (response.assets && response.assets.length > 0) {
                let imageUri = response.assets[0]?.uri;
                if (imageUri) {
                    setSelectedImage(imageUri);
                    saveImageUri(imageUri);
                }
            }
        });
    };

    const handleGalleryOpen = () => {
        const options = {
            mediaType: 'photo' as MediaType,
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorCode);
            } else if (response.assets && response.assets.length > 0) {
                let imageUri = response.assets[0]?.uri;
                if (imageUri) {
                    setSelectedImage(imageUri);
                    saveImageUri(imageUri);
                }
            }
        });
    };

    return (
        <View>
            <View>
                <Text style={styles.title}>Profile Photo</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.buttonContainer}>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setGalleryValue(1);
                        if (Platform.OS === 'ios') {
                            askForPermissions(PERMISSIONS.IOS.PHOTO_LIBRARY);
                        } else {
                            askForPermissions(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
                        }
                    }}
                >
                    <View style={styles.buttonContent}>
                        <Image source={require('../assets/first.png')} style={styles.icon} />
                        <Text>Upload from Gallery</Text>
                    </View>
                    <Image source={require('../assets/rightIcon.png')} style={styles.rightIcon} />
                </TouchableOpacity>

                

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setGalleryValue(2);
                        if (Platform.OS === 'ios') {
                            askForPermissions(PERMISSIONS.IOS.CAMERA);
                        } else {
                            askForPermissions(PERMISSIONS.ANDROID.CAMERA);
                        }
                    }}
                >
                    <View style={styles.buttonContent}>
                        <Image source={require('../assets/second.png')} style={styles.icon} />
                        <Text>Use Camera</Text>
                    </View>
                    <Image source={require('../assets/rightIcon.png')} style={styles.rightIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContent}>
                        <Image source={require('../assets/third.png')} style={styles.icon} />
                        <Text>Select an Avatar</Text>
                    </View>
                    <Image source={require('../assets/rightIcon.png')} style={styles.rightIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ModalButtons;

const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 30.36,
        marginBottom: 20,
    },
    separator: {
        borderWidth: 1,
        marginBottom: 22,
        borderColor: '#E6E9EE',
    },
    buttonContainer: {
        gap: 12,
    },
    button: {
        width: 380,
        height: 85,
        justifyContent: 'space-between',
        padding: 23,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F9FA',
        borderRadius: 16,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 44,
        height: 53,
        marginRight: 24,
    },
    rightIcon: {
        width: 4,
        height: 8,
    },
});
