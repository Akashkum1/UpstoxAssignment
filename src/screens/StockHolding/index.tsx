import React from 'react';
import Header from '../../components/Header';
import {GlobalStrings} from '../../constants/strings';
import StockList from './StockList';
import SummaryBottomSheet from './SummaryBottomSheet';
import {BaseUrl} from '../../constants/endPoints';
import LoadingScreen from '../../components/LoadingScreen';
import ErrorScreen from '../../components/ErrorScreen';
import {UseFetchResponse, useFetch} from '../../hooks/useFetch';
import {UserHoldingResponse} from '../../types/types';

const StockHolding = () => {
  const {
    responseData,
    loading,
    error,
    reFetch,
  }: UseFetchResponse<UserHoldingResponse> = useFetch<UserHoldingResponse>(
    `${BaseUrl}/bde7230e-bc91-43bc-901d-c79d008bddc8`,
    true,
  );

  const userHoldings = responseData?.userHolding || [];

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} retryFunction={reFetch} />;
  }
  return (
    <>
      <Header title={GlobalStrings.Heading} />
      <StockList data={userHoldings} />
      <SummaryBottomSheet data={userHoldings} />
    </>
  );
};

export default StockHolding;
