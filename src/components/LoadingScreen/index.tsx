import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/colors';

const LoadingScreen = (): React.JSX.Element => {
  return (
    <View style={styles.modalContainerView}>
      <ActivityIndicator size="large" color={Colors.SecondayColor} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  modalContainerView: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
