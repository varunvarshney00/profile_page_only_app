import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
    ActivityIndicator,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import styles from './stylesProfileEdit';

// import Back from 'react-native-vector-icons/Ionicons';

import { RadioButton } from 'react-native-paper';
// import Toast from 'react-native-toast-message';
// import ImagePicker from 'react-native-image-crop-picker';
import { Image } from 'react-native';
import Header from '../smallComponents/Header';
import ImageUpload from '../smallComponents/ImageUpload';
import { SafeAreaView } from 'react-native';
import InputBoxes from '../smallComponents/InputBoxes';
import CustomButton from '../smallComponents/CustomButton';






function UpdateProfile() {






    return (
        <SafeAreaView>
            <Header />
            <View>
                <ScrollView>
                    <ImageUpload />
                    <InputBoxes />
                    <CustomButton />
                </ScrollView>

            </View>

        </SafeAreaView >
    );
}

export default UpdateProfile;