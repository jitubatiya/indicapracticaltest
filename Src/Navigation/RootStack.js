
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Login';
import Home from '../Component/Home';
import Comment from '../Component/Comment';

const RootStackNav = createNativeStackNavigator();

const RootStack = () => (
    <RootStackNav.Navigator
        screenOptions={{
            headerShown: true, headerBackTitleVisible: true
        }}
    >
        <RootStackNav.Screen name={'login'} component={Login} />
        <RootStackNav.Screen name={'home'} component={Home} />
        <RootStackNav.Screen name={'comment'} component={Comment} />
    </RootStackNav.Navigator>
)
export default RootStack;