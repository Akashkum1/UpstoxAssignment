import React from 'react';
import Header from '../../components/Header';
import {GlobalStrings} from '../../constants/strings';
import StockList from './StockList';
import {MockStockResponse} from '../../data/mockApiResponse';
import SummaryBottomSheet from './SummaryBottomSheet';

const StockHolding = () => {
  return (
    <>
      <Header title={GlobalStrings.Heading} />
      <StockList data={MockStockResponse} />
      <SummaryBottomSheet data={MockStockResponse} />
    </>
  );
};

export default StockHolding;
