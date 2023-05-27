export type Merchant = {
    name: string,
    recordId: number,
    uniqueIdentifier: string,
    isActive: boolean,
    merchantCategoryRecordId: number,
    merchantCategory: MerchantCategory,
    merchantConfig: MerchantConfig
}

export type MerchantCategory = {
  recordId: number,
  name: string,
}

export type MerchantConfig = {
   
    hasValidation: boolean,
  }


export interface MerchantPage{
    data : Merchant[],
    count: number
}
export interface MerchantCategoryPage{
  data : MerchantCategory[],
  count: number
}