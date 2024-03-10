import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Stock} from '../../types/types';
import {convertNumberToString, convertToInteger} from '../../utils/helpers';
import {Spacings} from '../../constants/spacings';
import Typography from '../Typography';
import {GlobalStrings} from '../../constants/strings';

type StockCardProps = {
  item: Stock;
};

// Component to show information about particular stock
const StockCard = ({item}: StockCardProps): React.JSX.Element => {
  /* convert floating number to integer as arithmetics operations on
   floating value is not precise, the function converts ₹ 530.5 to  53050
   P&L = ltp*qty - avgPrice*qty*/
  const profitAndLossInInteger =
    convertToInteger(item.ltp) * item.quantity -
    convertToInteger(item.avgPrice) * item.quantity;
  /* converting the integer back to floating number and then to
  string becuase zeros in decimal places gets truncated  */
  const profitAndLoss = convertNumberToString(profitAndLossInInteger / 100);

  const ltp = convertNumberToString(item.ltp);

  return (
    <View style={styles.stockCard}>
      <View style={styles.stockCardInfoContainer}>
        <Typography weight="bold">{item.symbol}</Typography>
        <Typography>
          {GlobalStrings.StockCard.LTP}{' '}
          <Typography weight="bold">
            {GlobalStrings.IndianCurrency} {ltp}
          </Typography>
        </Typography>
      </View>
      <View style={styles.stockCardInfoContainer}>
        <Typography>{item.quantity}</Typography>
        <Typography>
          {GlobalStrings.StockCard.ProfitAndLoss}{' '}
          <Typography weight="bold">
            {GlobalStrings.IndianCurrency} {profitAndLoss}
          </Typography>
        </Typography>
      </View>
    </View>
  );
};

export default StockCard;

const styles = StyleSheet.create({
  stockCard: {
    gap: Spacings.Twelve,
    paddingVertical: Spacings.Twelve,
  },
  stockCardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
