/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import StockHolding from './screens/StockHolding';
import {Colors} from './constants/colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <StockHolding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.SecondayColor,
    flex: 1,
  },
});

export default App;
