import {StyleSheet, View} from 'react-native';
import React from 'react';
import {convertNumberToString} from '../../utils/helpers';
import {Spacings} from '../../constants/spacings';
import Typography from '../Typography';
import {GlobalStrings} from '../../constants/strings';

type SummaryCardProps = {
  text: string;
  value: number;
  marginBottom?: boolean;
};

// Component to show a particular summary of user's portfolio
const SummaryCard = ({
  text,
  value,
  marginBottom = false,
}: SummaryCardProps): React.JSX.Element => {
  const valueToString = convertNumberToString(value / 100);
  return (
    <View style={[styles.card, marginBottom && styles.marginBottom]}>
      <Typography weight="bold">{text}</Typography>
      <Typography>
        {GlobalStrings.IndianCurrency} {valueToString}
      </Typography>
    </View>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacings.Twelve,
  },
  marginBottom: {
    marginBottom: Spacings.ThirtySix,
  },
});
