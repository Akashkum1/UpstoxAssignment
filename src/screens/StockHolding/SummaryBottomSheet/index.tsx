import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {convertNumberToString, convertToInteger} from '../../../utils/helpers';
import {Stock} from '../../../types/types';
import {Colors} from '../../../constants/colors';
import {GlobalStrings} from '../../../constants/strings';

type SummaryBottomSheetProps = {
  data: Stock[];
};

type Accumulator = {
  currentval: number;
  totalval: number;
  todaysPL: number;
};

const SummaryBottomSheet = ({data}: SummaryBottomSheetProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const result = useMemo(
    () =>
      data.reduce(
        (acc: Accumulator, stock: Stock) => {
          acc.currentval =
            acc.currentval + convertToInteger(stock.ltp) * stock.quantity;
          acc.totalval =
            acc.totalval + convertToInteger(stock.avgPrice) * stock.quantity;
          acc.todaysPL =
            acc.todaysPL +
            (convertToInteger(stock.close) - convertToInteger(stock.ltp)) *
              stock.quantity;
          return acc;
        },
        {currentval: 0, totalval: 0, todaysPL: 0},
      ),
    [data],
  );
  return (
    <View style={styles.summaryBottomSheet}>
      <Pressable
        onPress={() => setIsExpanded(prev => !prev)}
        style={styles.button}
        hitSlop={styles.hitSlop}>
        <View
          style={[
            styles.triangle,
            {transform: [{rotate: isExpanded ? '180deg' : '0deg'}]},
          ]}
        />
      </Pressable>
      {isExpanded ? (
        <>
          <View style={styles.card}>
            <Text>{GlobalStrings.SummaryCard.CurrentValue}</Text>
            <Text>
              {GlobalStrings.IndianCurrency}{' '}
              {convertNumberToString(result.currentval / 100)}
            </Text>
          </View>
          <View style={styles.card}>
            <Text>{GlobalStrings.SummaryCard.TotalInvestment}</Text>
            <Text>
              {GlobalStrings.IndianCurrency}{' '}
              {convertNumberToString(result.totalval / 100)}
            </Text>
          </View>
          <View style={[styles.card, styles.marginBottom]}>
            <Text>{GlobalStrings.SummaryCard.ProfitAndLoss}</Text>
            <Text>
              {GlobalStrings.IndianCurrency}{' '}
              {convertNumberToString(
                (result.currentval - result.totalval) / 100,
              )}
            </Text>
          </View>
        </>
      ) : null}
      <View style={styles.card}>
        <Text>{GlobalStrings.SummaryCard.ProfitAndLoss}</Text>
        <Text>
          {GlobalStrings.IndianCurrency}{' '}
          {convertNumberToString((result.currentval - result.totalval) / 100)}
        </Text>
      </View>
    </View>
  );
};

export default SummaryBottomSheet;

const styles = StyleSheet.create({
  summaryBottomSheet: {
    backgroundColor: Colors.SecondayColor,
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
  hitSlop: {
    bottom: 24,
    right: 16,
    left: 16,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 4,
  },
  triangle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.PrimaryColor,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  marginBottom: {
    marginBottom: 36,
  },
});
