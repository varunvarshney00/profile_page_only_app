import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';
import { Modal } from 'react-native';
import ModalButtons from './ModalButtons';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [modal, setModal] = useState(false);

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
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => setModal(!modal)}>

                        {/* Backdrop */}
                        <TouchableWithoutFeedback onPress={() => setModal(false)}>
                            <View style={styles.backdrop} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => setModal(false)}>
                            <View style={styles.modalWrapper}>
                                <TouchableWithoutFeedback>
                                    <View style={styles.modalContent}>
                                        <ModalButtons setSelectedImage={setSelectedImage} />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>

                <View>
                    {/* {selectedImage ? (
                        <Avatar.Image source={{ uri: selectedImage }} size={140} style={styles.avatar} />
                    ) : (
                        <Avatar.Image source={require('../assets/ladkiPhoto.png')} size={140} style={styles.avatar} />
                    )} */}
                    <Image source={selectedImage ? { uri: selectedImage } : require('../assets/ladkiPhoto.png')} size={140} style={styles.avatar} />
                </View>

                <View>
                    <Text style={styles.profileText}>Profile Picture</Text>
                    <TouchableOpacity onPress={() => setModal(true)}>
                        <Text style={styles.changePhotoText}>Change Photo</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>
    );
};

export default ImageUpload;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 32,
        marginBottom: 53,

    },
    modalContainer: {
        justifyContent: 'flex-end',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        width: '100%',
        height: 419,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    avatar: {
        // marginBottom: 53,
    },
    profileText: {
        fontSize: 14,
        color: '#4B5879',
        fontWeight: '400',
        marginBottom: 4,
        marginLeft: 20,
    },
    changePhotoText: {
        fontWeight: '500',
        color: '#EE28A9',
        fontSize: 16,
        lineHeight: 24,
        borderWidth: 1,
        borderColor: '#EE28A9',
        marginLeft: 20,
    },
});
