import { RacketTypeEnum } from '../enum/enum-racket-type';
import { StringBrandEnum } from '../enum/enum-string-brand';
import { StringTypeEnum } from '../enum/enum-string-type';
import { StringColorEnum } from '../enum/enum-string-color';

export interface RacketStringModel {
  stringId: string;
  brand: StringBrandEnum;
  modelName: string;
  stringType: StringTypeEnum;
  length: number;
  pricePerRacket: number;
  thickness: number;
  color: StringColorEnum;
  stringPurpose: RacketTypeEnum;
  purchaseHistory: [PurchaseHistory];
}

export interface PurchaseHistory {
  date: number;
  length: number;
  price: number;
}
