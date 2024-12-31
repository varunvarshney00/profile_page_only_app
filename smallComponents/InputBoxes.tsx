import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
import PhoneNumber from './PhoneNumber'
import { Button } from 'react-native-paper'

const InputBoxes = ({setFocusedInput}) => {
    return (
        <View style={{ marginHorizontal: 30, gap:24 }}>
            <CustomInput
                label='Name'
                onFocus={() => setFocusedInput('first')}

            />
            <CustomInput
                label='Username'
                onFocus={() => setFocusedInput('username')}

            />
            <CustomInput
                label='Birthday'
                birthday={true}
                onFocus={() => setFocusedInput('birthday')}

            />
            <CustomInput
                label='Gender'
                gender={true}
                onFocus={() => setFocusedInput('gender')}

            />
            <PhoneNumber/>
            <CustomInput
                label='Email ID'
                onFocus={() => setFocusedInput('last')}
            />
            <View style={{height:12}}></View>

        </View>
    )
}

export default InputBoxes

const styles = StyleSheet.create({})