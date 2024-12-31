import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CustomInput = ({ label, birthday, gender, onFocus }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isGenderPickerVisible, setGenderPickerVisibility] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');
    const [pickedDate, setPickedDate] = useState('');

    const formatDate = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1; // Months are zero-indexed
        let year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const toggleGenderPicker = () => {
        setGenderPickerVisibility(!isGenderPickerVisible);
    };


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn('A date has been picked: ', date);
        const formattedDate = formatDate(date);
        setPickedDate(formattedDate);
        hideDatePicker();
    };
    // console.log("gender==>", gender, selectedGender);
    return (
        <View>
            <TextInput
                onFocus={onFocus}
                label={label}
                value={
                    birthday ? pickedDate : gender ? selectedGender : ''}
                style={styles.input}
                mode="outlined"
                outlineColor="#E7EBF3"
                theme={{
                    roundness: 16,
                }}
                right={birthday &&
                    (<TextInput.Icon
                        icon={({ size, color }) => (
                            <Image
                                source={require('../assets/calendar.png')}
                                style={{ width: 19.29, height: 19.53, tintColor: color }}
                            />
                        )}
                        onPress={showDatePicker}
                    />) || gender && (<TextInput.Icon
                        icon={({ size, color }) => (
                            <Image
                                source={require('../assets/downArrow.png')}
                                style={{ width: 9, height: 4.5 }}
                            />
                        )}
                        onPress={toggleGenderPicker}
                    />)
                }

            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            {isGenderPickerVisible && (
                <Picker
                    selectedValue={selectedGender}
                    onValueChange={(itemValue) => {
                        setSelectedGender(itemValue);
                        setGenderPickerVisibility(false);
                    }}
                    style={styles.picker}
                >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
            )}
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        width: 368,
        height: 60,
        borderRadius: 30,
        borderColor: '#E7EBF3',
    }
});
