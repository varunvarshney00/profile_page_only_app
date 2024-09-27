import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { TextInput } from 'react-native-paper';
import { styles } from './PhoneNumberStyles';

type PhoneProps = NativeStackScreenProps<RootStackParamList, 'PhoneNumber'>



const PhoneNumber = ({ navigation }: PhoneProps) => {
    const [isLoginEnabled, setIsLoginEnabled] = useState(false);

    const [phoneValue, setPhoneValue] = useState('');

    const [countryCode, setCountryCode] = useState<CountryCode>('IN');
    const [country, setCountry] = useState<Country>();
    const [showCountry, setShowCountry] = useState(false);

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    const handlePhoneInputChange = (text: string) => {
        setPhoneValue(text);
        setIsLoginEnabled(text.trim().length > 0);
    };

    return (

        <View style={styles.container}>


            <TouchableOpacity style={styles.flagbutton}>
                <CountryPicker
                    {...{
                        countryCode,
                        withFilter: true,
                        withFlag: true,
                        withCountryNameButton: false,
                        withAlphaFilter: false,
                        withCallingCode: false,
                        withEmoji: true,
                        onSelect,
                    }}
                    visible={showCountry}
                />
                <Text>+
                    {country?.callingCode || 91}
                </Text>
            </TouchableOpacity>



            <View style={styles.phoneInputContainer}>
                <TextInput
                    label="Phone Number"
                    style={styles.phoneNumber}
                    theme={{
                        colors: {
                            primary: 'black',
                            background: 'white',
                            placeholder: 'gray',
                            text: 'black',
                            error: 'red',
                        },
                        roundness: 16,
                    }}
                    underlineStyle={{
                        display: 'none',
                    }}
                    underlineColor={'transparent'}
                    textColor="black"
                    activeUnderlineColor={'black'}
                    mode="outlined"
                    value={phoneValue}
                    onChangeText={handlePhoneInputChange}

                />
            </View>

        </View>
    );
};

export default PhoneNumber;
