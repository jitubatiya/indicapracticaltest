import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, FlatList } from 'react-native';
import { getUserData } from '../Utils/helper';
const { height, width } = Dimensions.get("window")
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';

const Comment = (props) => {
    const [user_id, setUserId] = useState("")
    const [comment, setComment] = useState("")
    const [comment_id, setCommentid] = useState(0)
    const [username, setUserName] = useState("")
    const [commentList, setCommentList] = useState([])
    useEffect(() => {
        getUserData().then(res => {
            setUserId(res?.id)
            setUserName(res?.name)
        })
        getCommentData()
    }, [])
    const getCommentData = () => {
        database()
            .ref('Comments/postID-123/')
            .on('value', snapshot => {
                try {
                    let responselist = Object.values(snapshot.val())
                    setTimeout(() => {
                        setCommentList(responselist)
                        setCommentid(responselist?.length)
                    }, 2000);
                 
                } catch (error) {
                    setCommentid(0)
                }

            });
    }
    const onAdd = () => {
        database().ref('Comments/postID-123/' + comment_id).set({
            comment,
            user_id,
            username
        }).then((data) => {
            //success callback
            setComment("")
            Toast.show("Suceessfully add comment", Toast.SHORT, { backgroundColor: 'blue' })
            getCommentData()
            console.log("successfully add data")
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }
    function onChangeText(value) {
        setComment(value)
    }
    const footerView = () => {
        return (
            <View style={styles.footerView}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"writing the comment..."}
                    placeholderTextColor={"rgba(0,0,0,0.3)"}
                    multiline
                    value={comment}
                    onChangeText={onChangeText}

                />
                <TouchableOpacity onPress={onAdd} style={styles.addView}>
                    <Text style={styles.txtAdd}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderView=({item,index})=>{
        return(
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image style={styles.userImg} resizeMode={"contain"} source={require("../Assets/Image/user.png")}/>
                <View style={{flex:0.7}}>
                    <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>{item.username}</Text>
                    <Text style={{fontSize:12,color:"black",fontWeight:"400"}}>{item.comment}</Text>
               </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={commentList}
                style={{ flex: 1,marginBottom:80 }}
                renderItem={renderView}
            />
            {footerView()}
        </View>
    )
}
const styles = StyleSheet.create({
    addView: {
        alignSelf: "center", justifyContent: "center",
        alignItems: "center", flex: 0.2, borderWidth: 1, borderColor: "green", borderRadius: 10
    },
    footerView: {
        position: "absolute", bottom: 0,
        width: width, borderWidth: 1, flex: 1, flexDirection: "row"
    },
    txtAdd: { fontSize: 14, color: "green", paddingVertical: 5 },
    inputStyle: { flex: 0.8, color: "black", alignSelf: "center" },
    userImg:{height:30,width:30,flex:0.1,marginRight:10}
})
export default Comment;