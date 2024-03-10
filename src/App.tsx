/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
