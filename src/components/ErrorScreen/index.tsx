import {StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import {Colors} from '../../constants/colors';
import {Spacings} from '../../constants/spacings';
import Typography from '../Typography';

type ErrorScreenProps = {
  error: string;
  retryFunction: () => void;
};

const ErrorScreen = ({
  error,
  retryFunction,
}: ErrorScreenProps): React.JSX.Element => {
  return (
    <View style={styles.modalContainerView}>
      <Typography size="medium" weight="600" color={Colors.SecondayColor}>
        {error}
      </Typography>
      <Button style={styles.button} onPress={retryFunction}>
        <Typography color={Colors.PrimaryColor}>Retry</Typography>
      </Button>
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  modalContainerView: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.SecondayColor,
    marginTop: Spacings.Twelve,
    paddingHorizontal: Spacings.Twenty,
    paddingVertical: Spacings.Eight,
  },
});
