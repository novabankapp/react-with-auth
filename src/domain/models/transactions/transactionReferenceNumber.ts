import { FinancialInstitution } from "../banks/financialInstitution"
import { Merchant } from "../merchants/merchant"

export type TransactionReferenceNumber = {
    recordId: number,
    TRN: string,
    merchant: Merchant,
    financialInstitution: FinancialInstitution,
    amount: number,
    used: boolean,
    userId: string,
    serviceUniqueIdentifier: string,
    financialServiceUniqueIdentifier: string,
    metadata?: string,
    createdAt: string
    
}

export interface TransactionRefPage{
    data : TransactionReferenceNumber[],
    count: number
}