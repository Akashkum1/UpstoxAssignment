import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStrings} from '../../../constants/strings';
import {Stock} from '../../../types/types';
import {convertNumberToString, convertToInteger} from '../../../utils/helpers';
import {Colors} from '../../../constants/colors';

type StockListProps = {
  data: Stock[];
};

const StockList = ({data}: StockListProps) => {
  const renderStock = ({item}: {item: Stock; index: number}) => {
    /* convert floating number to integer as arithmetics operations on
    floating value is not precise, the function converts ₹ 530.5 to  53050 */
    // P&L = ltp*qty - avgPrice*qty
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
          <Text>{item.symbol}</Text>
          <Text>
            {GlobalStrings.StockCard.LTP}{' '}
            <Text>
              {GlobalStrings.IndianCurrency} {ltp}
            </Text>
          </Text>
        </View>
        <View style={styles.stockCardInfoContainer}>
          <Text>{item.quantity}</Text>
          <Text>
            {GlobalStrings.StockCard.ProfitAndLoss}{' '}
            <Text>
              {GlobalStrings.IndianCurrency} {profitAndLoss}
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const emptyListComponent = () => {
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>
          {GlobalStrings.StockCard.EmptyStockListText}
        </Text>
      </View>
    );
  };
  console.log(data);
  return (
    <View style={styles.stockListContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.symbol}
        renderItem={renderStock}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={styles.flatlistConatiner}
        ListEmptyComponent={emptyListComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default StockList;

const styles = StyleSheet.create({
  stockListContainer: {
    backgroundColor: Colors.BackgroundColor,
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.BackgroundColor,
  },
  flatlistConatiner: {
    paddingHorizontal: 20,
    backgroundColor: Colors.SecondayColor,
  },
  itemSeparator: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  emptyList: {
    paddingVertical: 32,
  },
  emptyListText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stockCard: {
    gap: 12,
    paddingVertical: 12,
  },
  stockCardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
