import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import FacebookBtn from '../Component/FacebookBtn';
import GoogleBtn from '../Component/GoogleBtn';
const { height, width } = Dimensions.get("window")
import database from '@react-native-firebase/database';
import { storeData } from '../Utils/helper';

const Login = (props) => {
    const onGooglePress = async (data) => {
        await storeData(data?.user)
        writeUserData(data?.user?.name, data?.user?.id)
    }
    const writeUserData = (name, id) => {
        database().ref('Users/' + id).set({
            name
        }).then((data) => {
            //success callback
            props.navigation.navigate("home")
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }
    const onFacebookPress = (data) => {

    }
    return (
        <View style={styles.mainView}>
            <GoogleBtn
                onGooglePress={onGooglePress}
            />
            {/* <FacebookBtn
                onFacebookPress={onFacebookPress}
            /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    }
})
export default Login;