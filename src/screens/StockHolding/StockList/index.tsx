import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {GlobalStrings} from '../../../constants/strings';
import {Stock} from '../../../types/types';
import {Colors} from '../../../constants/colors';
import StockCard from '../../../components/StockCard';
import {Spacings} from '../../../constants/spacings';
import Typography from '../../../components/Typography';

type StockListProps = {
  data: Stock[];
};

const StockList = ({data}: StockListProps): React.JSX.Element => {
  const renderStock = ({item}: {item: Stock; index: number}) => (
    <StockCard item={item} />
  );

  const itemSeparator = (): React.JSX.Element => {
    return <View style={styles.itemSeparator} />;
  };

  const emptyListComponent = (): React.JSX.Element => {
    return (
      <View style={styles.emptyList}>
        <Typography size="medium" weight="bold">
          {GlobalStrings.StockCard.EmptyStockListText}
        </Typography>
      </View>
    );
  };

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
    paddingHorizontal: Spacings.Twenty,
    backgroundColor: Colors.SecondayColor,
  },
  itemSeparator: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  emptyList: {
    paddingVertical: Spacings.ThirtyTwo,
  },
});
