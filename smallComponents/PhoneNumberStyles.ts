// PhoneNumberStyles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    flagbutton: {
        borderWidth: 1,
        width: 89,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:  16,
        backgroundColor: '#F8F9F9',
        flexDirection:'row',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        width: 271,
        borderColor: '#ffffff',
        borderRadius: 8,
        backgroundColor: '#F8F9F9',
        height:60,

    },
    phoneNumber:{
        width:267,
        height:60,
        borderRadius:16,
    },
});
