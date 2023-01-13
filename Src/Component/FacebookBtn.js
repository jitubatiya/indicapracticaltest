import React, { useState, useEffect } from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';
//import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const FacebookBtn = (props) => {
    // const { onFacebookPress } = props
    const onClick = async() => {
        // const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        // if (result.isCancelled) {
        //     throw 'User cancelled the login process';
        // }
        // const data = await AccessToken.getCurrentAccessToken();

        // if (!data) {
        //     throw 'Something went wrong obtaining access token';
        // }
    }
    return (
        <TouchableOpacity onPress={onClick} style={styles.btn}>
            <Text style={styles.txtLabel}>Facebook Login</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "blue",
        marginTop: 20

    },
    txtLabel: {
        padding: 10,
        color: "white",
    }
})
export default FacebookBtn;