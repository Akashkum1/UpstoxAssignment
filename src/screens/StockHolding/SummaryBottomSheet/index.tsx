import {StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {convertToInteger} from '../../../utils/helpers';
import {Stock} from '../../../types/types';
import {Colors} from '../../../constants/colors';
import {GlobalStrings} from '../../../constants/strings';
import {Spacings} from '../../../constants/spacings';
import SummaryCard from '../../../components/SummaryCard';
import Button from '../../../components/Button';

type SummaryBottomSheetProps = {
  data: Stock[];
};

type Accumulator = {
  currentval: number;
  totalval: number;
  todaysPL: number;
};

const SummaryBottomSheet = ({
  data,
}: SummaryBottomSheetProps): React.JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const result: Accumulator = useMemo(
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
      <Button
        onPress={() => setIsExpanded(prev => !prev)}
        style={styles.button}
        hitSlop={styles.hitSlop}>
        <View
          style={[
            styles.triangle,
            {transform: [{rotate: isExpanded ? '180deg' : '0deg'}]},
          ]}
        />
      </Button>
      {isExpanded ? (
        <>
          <SummaryCard
            text={GlobalStrings.SummaryCard.CurrentValue}
            value={result.currentval}
          />
          <SummaryCard
            text={GlobalStrings.SummaryCard.TotalInvestment}
            value={result.totalval}
          />
          <SummaryCard
            text={GlobalStrings.SummaryCard.TodayProfitAndLoss}
            value={result.todaysPL}
            marginBottom
          />
        </>
      ) : null}
      <SummaryCard
        text={GlobalStrings.SummaryCard.ProfitAndLoss}
        value={result.currentval - result.totalval}
      />
    </View>
  );
};

export default SummaryBottomSheet;

const styles = StyleSheet.create({
  summaryBottomSheet: {
    backgroundColor: Colors.SecondayColor,
    paddingBottom: Spacings.ThirtySix,
    paddingHorizontal: Spacings.Twenty,
  },
  hitSlop: {
    bottom: Spacings.TwentyFour,
    right: Spacings.Sixteen,
    left: Spacings.Sixteen,
  },
  button: {
    alignSelf: 'center',
    marginBottom: Spacings.Twelve,
    marginTop: Spacings.Four,
  },
  triangle: {
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.PrimaryColor,
  },
});
