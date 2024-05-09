import React, {useCallback, useState} from 'react';
import {
  NavigationAction,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import usePreventRemove from '@react-navigation/core/src/usePreventRemove';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Modal, Text, View, StyleSheet} from 'react-native';
import {Button} from './Button.tsx';
import {Routes} from './StackNavigator.tsx';

export const ExitConfirmModal = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<Routes, keyof Routes>>();
  const [pendingAction, setPendingAction] = useState<NavigationAction>();
  const isFocused = useIsFocused();

  const handlePressCancel = useCallback(() => {
    setPendingAction(undefined);
  }, []);

  const handlePressConfirm = useCallback(
    (action: NavigationAction) => {
      setPendingAction(undefined);
      navigation.dispatch(action);
    },
    [navigation],
  );

  usePreventRemove(isFocused && !pendingAction, event => {
    setPendingAction(event.data.action);
  });

  if (!pendingAction) {
    return null;
  }

  return (
    <Modal
      animationType="none"
      hardwareAccelerated
      transparent
      visible
      onRequestClose={handlePressCancel}>
      <View style={styles.screen}>
        <View>
          <View style={styles.dialog}>
            <View>
              <Button onPress={() => handlePressConfirm(pendingAction)}>
                <Text>Go back</Text>
              </Button>
              <Button onPress={handlePressCancel}>
                <Text>Cancel</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dialog: {
    backgroundColor: 'white',
    padding: 25,
    elevation: 2,
    width: '100%',
    maxHeight: '100%',
  },
});
