import {FontSize} from '../constants/fonts';

export type Stock = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};

export type FontSizeType = keyof typeof FontSize;

export type FontWeightType = '400' | '500' | '600' | '700' | 'normal' | 'bold';

export interface UserHoldingResponse {
  userHolding: Stock[];
}
