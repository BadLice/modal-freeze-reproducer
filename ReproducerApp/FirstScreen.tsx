import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import React from 'react';
import {Routes} from './StackNavigator.tsx';
import {Button} from './Button.tsx';

export const FirstScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<Routes, keyof Routes>>();

  return (
    <>
      <Text>This is first</Text>
      <Button onPress={() => navigation.navigate('Second', {})}>
        <Text>go to second</Text>
      </Button>
    </>
  );
};
