import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/colors';

type HeaderProps = {
  title: string;
};

const Header = ({title}: HeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.PrimaryColor,
    paddingLeft: 20,
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.SecondayColor,
  },
});
