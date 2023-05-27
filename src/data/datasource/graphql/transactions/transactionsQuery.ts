import { gql } from '@apollo/client';

export const BANK_REF_TRANSACTIONS_PAGING = gql`query getBankTransactionPaging($bankRef: String, $page: Int, $size: Int){
    bankTransactionRefPaging(bankRef: $bankRef, page: $page, size: $size){
         count
         transactionRefs{
         trn
         customer_ref
         used
         amount
         service_id
         bank_id
         created_at
         expiry_date
         merchant {
             name
             unique_id
             id
         }
         bank {
             name
             unique_id
             id
         }
    }
  }
}`
export const CUSTOMER_REF_TRANSACTION_PAGING = gql`query getCustomerTransactionPaging($customerRef: String, $page: Int, $size: Int){
    customerTransactionRefPaging(customerRef: $customerRef, page: $page, size: $size){
        count
        transactionRefs{
        trn
        customer_ref
        used
        amount
        service_id
        bank_id
        created_at
        expiry_date
        merchant {
            name
            unique_id
            id
        }
        bank {
            name
            unique_id
            id
        }
    }
  }
}`
export const MERCHANT_TRANSACTION_PAGING = gql`query getMerchantTransactionPaging($merchantRef: String, $page: Int, $size: Int){
    merchantTransactionRefPaging(merchantRef: $merchantRef, page: $page, size: $size){
        count
    transactionRefs{
        trn
        customer_ref
        used
        amount
        service_id
        bank_id
        created_at
        expiry_date
        merchant {
            name
            unique_id
            id
        }
        bank {
            name
            unique_id
            id
        }
    }
  }
}`

export const UNSED_TRANSACTION_REF_PAGING = gql`query getUnusedTransactionRefPaging($page: Int, $size: Int){
    unusedTransactionRefPaging(page: $page, size: $size){
        count
       
        transactionRefs{
        trn
        customer_ref
        used
        amount
        service_id
        bank_id
        created_at
        expiry_date
        merchant {
            name
            unique_id
            id
        }
        bank {
            name
            unique_id
            id
        }
    }
  }
}`

export const USED_TRANSACTION_REF = gql`query getUsedTransactionRefPaging($page: Int, $size: Int){
    usedTransactionRefPaging(page: $page, size: $size){
        count
         transactionRefs{
        trn
        customer_ref
        used
        amount
        service_id
        bank_id
        created_at
        expiry_date
        merchant {
            name
            unique_id
            id
        }
        bank {
            name
            unique_id
            id
        }
    }
  }
}`


export const ALL_TRANSACTION_REFS = gql`query getAllTransactionRefPaging($page: Int, $size: Int){
    allTransactionRefPaging(page: $page, size: $size){
        count
         transactionRefs{
        trn
        customer_ref
        used
        amount
        service_id
        bank_id
        created_at
        expiry_date
        merchant {
            name
            unique_id
            id
        }
        bank {
            name
            unique_id
            id
        }
    }
  }
}`


export const EXPIRED_TRANSACTION_REFS = gql`query getExpiredTransactionRefPaging($page: Int, $size: Int){
    expiredTransactionRefPaging(page: $page, size: $size){
        count
         transactionRefs{
        trn
        customer_ref
        used
        amount
        service_id
        bank_id
        created_at
        expiry_date
        merchant {
            name
            unique_id
            id
        }
        bank {
            name
            unique_id
            id
        }
    }
  }
}`


export const ACTIVE_TRANSACTION_REFS = gql`query getActiveTransactionRefPaging($page: Int, $size: Int){
    activeTransactionRefPaging(page: $page, size: $size){
        count
         transactionRefs{
        trn
        customer_ref
        used
        amount
        service_id
        bank_id
        created_at
        expiry_date
        merchant {
            name
            unique_id
            id
        }
        bank {
            name
            unique_id
            id
        }
    }
  }
}`