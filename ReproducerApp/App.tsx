import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator.tsx';

const MainDrawerNavigator = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawerNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainDrawerNavigator.Screen
          name={'MainStack'}
          component={StackNavigator}
        />
      </MainDrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
