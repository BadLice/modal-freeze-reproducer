import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirstScreen} from './FirstScreen.tsx';
import {SecondScreen} from './SecondScreen.tsx';
import React from 'react';

export type Routes = {First: {}; Second: {}};

const NativeStackNavigator = createNativeStackNavigator<Routes>();

export const StackNavigator = () => {
  return (
    <NativeStackNavigator.Navigator>
      <NativeStackNavigator.Screen
        name={'First'}
        component={FirstScreen}
        options={{title: 'First'}}
      />
      <NativeStackNavigator.Screen
        name={'Second'}
        component={SecondScreen}
        options={{title: 'Second'}}
      />
    </NativeStackNavigator.Navigator>
  );
};
