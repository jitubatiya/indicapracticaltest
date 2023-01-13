import React, { useState, useEffect } from 'react';
import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
const GoogleBtn = (props) => {
    const { onGooglePress } = props
    useEffect(() => {
        _configureGoogleSignIn()
    },[])
    const onClick = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            onGooglePress(userInfo)

        } catch (error) {
            console.log("error", error)
        }
    };

    const _configureGoogleSignIn = () => {
        GoogleSignin.configure({
            iosClientId: "",
            offlineAccess: false,
            webClientId: "217164077120-qoenjjr5md3nkbsihqc3mifqlc68b3o5.apps.googleusercontent.com"
        });
    }
    return (
        <TouchableOpacity onPress={onClick} style={styles.btn}>
            <Text style={styles.txtLabel}>Google Login</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "red"

    },
    txtLabel: {
        padding: 10,
        color: "white",
    }
})
export default GoogleBtn;