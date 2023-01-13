import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = (props) => {
    const postView = () => {
        return (
            <View style={{ margin: 20, borderWidth: 1 }}>
                <Text style={styles.txtLabel}>Post -1</Text>
                <Image style={styles.imgView} source={{ uri: "https://picsum.photos/id/237/200/300" }} />
                <TouchableOpacity onPress={()=>props.navigation.navigate("comment")} style={styles.cmtView}>
                    <Text style={styles.cmtLabel}>Comment</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            {postView()}
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    cmtView: {
        height: 40, alignSelf: "center", alignItems: "center",
        justifyContent: "center", borderColor: "blue", borderWidth: 1, marginVertical: 10,
        borderRadius:10
    },
    imgView: { height: 300, width: '100%' },
    txtLabel: { fontSize: 20, color: "black", textAlign: "center", },
    cmtLabel: { fontSize: 15, color: "blue", textAlign: "center",paddingHorizontal:10 }

})
export default Home;