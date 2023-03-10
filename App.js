/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './Src/Navigation/RootStack';

const App = () => {

  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>


  )
}
export default App;
