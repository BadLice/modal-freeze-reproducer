import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {TouchableOpacityProps} from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

export const Button = (props: TouchableOpacityProps) => (
  <TouchableOpacity style={styles.button} {...props}>
    {props.children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
  },
});
