import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
    ActivityIndicator,
    ScrollView,
    TouchableWithoutFeedback,
    Animated,
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
import useKeyboardOffsetHeight from '../utils/useKeyboardOffsetHeight';






function UpdateProfile() {

    const keyboardOffsetHeight = useKeyboardOffsetHeight();
    const animatedValue = useRef(new Animated.Value(0)).current;

    const [focusedInput, setFocusedInput] = useState(null);



    useEffect(() => {
        let animationHeight = 0;

        if (focusedInput === 'last') {
            animationHeight = -keyboardOffsetHeight * 0.8;
        } else if (keyboardOffsetHeight !== 0) {
            animationHeight = -keyboardOffsetHeight * 0.4;
        }

        if (keyboardOffsetHeight == 0) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(animatedValue, {
                // toValue: -100,
                toValue: animationHeight,
                duration: 600,
                useNativeDriver: true,
            }).start();
        }
    }, [keyboardOffsetHeight]);


    return (
        <>
            <SafeAreaView>
                <Header />
                <View style={{ height: 700 }}>
                    <ScrollView>
                        <Animated.View style={{ transform: [{ translateY: animatedValue }] }}>
                            <ImageUpload />
                            <InputBoxes setFocusedInput={setFocusedInput}/>
                        </Animated.View>
                    </ScrollView>

                </View>

            </SafeAreaView >
            <CustomButton />
        </>
    );
}

export default UpdateProfile;