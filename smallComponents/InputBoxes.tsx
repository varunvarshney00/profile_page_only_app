import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
import PhoneNumber from './PhoneNumber'
import { Button } from 'react-native-paper'

const InputBoxes = () => {
    return (
        <View style={{ marginHorizontal: 30, gap:24 }}>
            <CustomInput
                label='Name'
            />
            <CustomInput
                label='Username'
            />
            <CustomInput
                label='Birthday'
                birthday={true}
            />
            <CustomInput
                label='Gender'
                gender={true}
            />
            <PhoneNumber/>
            <CustomInput
                label='Email ID'
            />

        </View>
    )
}

export default InputBoxes

const styles = StyleSheet.create({})