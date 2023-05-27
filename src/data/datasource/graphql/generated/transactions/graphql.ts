/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
  Decimal: any;
};

export type BankCategory = {
  __typename?: 'BankCategory';
  /** Banks */
  banks?: Maybe<Array<Maybe<FinancialInstitution>>>;
  /**  Created At. */
  created_at?: Maybe<Scalars['DateTime']>;
  /**  Id. */
  id: Scalars['Int'];
  /**  Name. */
  name: Scalars['String'];
};

export type FinancialInstitution = {
  __typename?: 'FinancialInstitution';
  /** Active. */
  active: Scalars['Boolean'];
  /** Category */
  category?: Maybe<BankCategory>;
  /**  Created At. */
  created_at?: Maybe<Scalars['DateTime']>;
  /**  Id. */
  id: Scalars['Int'];
  /**  Id. */
  name: Scalars['String'];
  /** Unique Id. */
  unique_id: Scalars['String'];
};

export type Merchant = {
  __typename?: 'Merchant';
  /** Active. */
  active: Scalars['Boolean'];
  /** Category */
  category?: Maybe<MerchantCategory>;
  /**  Created At. */
  created_at?: Maybe<Scalars['DateTime']>;
  /** HasValidation. */
  has_validation: Scalars['Boolean'];
  /**  Id. */
  id: Scalars['Int'];
  /**  Id. */
  name: Scalars['String'];
  /**  Short Code. */
  short_code: Scalars['String'];
  /** Unique Id. */
  unique_id: Scalars['String'];
};

export type MerchantCategory = {
  __typename?: 'MerchantCategory';
  /**  Created At. */
  created_at?: Maybe<Scalars['DateTime']>;
  /**  Id. */
  id: Scalars['Int'];
  /** Merchants */
  merchants?: Maybe<Array<Maybe<Merchant>>>;
  /**  Name. */
  name: Scalars['String'];
};

export type TransactionRefPaging = {
  __typename?: 'TransactionRefPaging';
  /**  Count. */
  count: Scalars['Int'];
  /** Categories */
  transactionRefs?: Maybe<Array<Maybe<TransactionReferenceNumber>>>;
};

export type TransactionReferenceNumber = {
  __typename?: 'TransactionReferenceNumber';
  /**  Id. */
  amount?: Maybe<Scalars['Decimal']>;
  /** Banks */
  bank?: Maybe<FinancialInstitution>;
  /**  Bank Id. */
  bank_id: Scalars['String'];
  /** Created At. */
  created_at?: Maybe<Scalars['DateTime']>;
  /**  Customer Reference. */
  customer_ref: Scalars['String'];
  /**  Expiry. */
  expiry_date?: Maybe<Scalars['DateTime']>;
  /**  Id. */
  id: Scalars['Int'];
  /** merchant */
  merchant?: Maybe<Merchant>;
  /**  Metadata. */
  metadata?: Maybe<Scalars['String']>;
  /**  Service Id. */
  service_id: Scalars['String'];
  /**  TRN. */
  trn: Scalars['String'];
  /**  Used. */
  used: Scalars['Boolean'];
  /**  UserId. */
  userId: Scalars['String'];
};

export type TransactionReferenceQuery = {
  __typename?: 'TransactionReferenceQuery';
  activeTransactionRefPaging?: Maybe<TransactionRefPaging>;
  allTransactionRefPaging?: Maybe<TransactionRefPaging>;
  bankTransactionRefPaginated?: Maybe<Array<Maybe<TransactionReferenceNumber>>>;
  bankTransactionRefPaging?: Maybe<Array<Maybe<TransactionRefPaging>>>;
  customerTransactionRefPaginated?: Maybe<Array<Maybe<TransactionReferenceNumber>>>;
  customerTransactionRefPaging?: Maybe<Array<Maybe<TransactionRefPaging>>>;
  expiredTransactionRefPaging?: Maybe<TransactionRefPaging>;
  merchantTransactionRefPaginated?: Maybe<Array<Maybe<TransactionReferenceNumber>>>;
  merchantTransactionRefPaging?: Maybe<TransactionRefPaging>;
  unusedTransactionRefPaginated?: Maybe<Array<Maybe<TransactionReferenceNumber>>>;
  unusedTransactionRefPaging?: Maybe<TransactionRefPaging>;
  usedTransactionRefPaginated?: Maybe<Array<Maybe<TransactionReferenceNumber>>>;
  usedTransactionRefPaging?: Maybe<TransactionRefPaging>;
};


export type TransactionReferenceQueryActiveTransactionRefPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryAllTransactionRefPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryBankTransactionRefPaginatedArgs = {
  bankRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryBankTransactionRefPagingArgs = {
  bankRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryCustomerTransactionRefPaginatedArgs = {
  customerRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryCustomerTransactionRefPagingArgs = {
  customerRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryExpiredTransactionRefPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryMerchantTransactionRefPaginatedArgs = {
  merchantRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryMerchantTransactionRefPagingArgs = {
  merchantRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryUnusedTransactionRefPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryUnusedTransactionRefPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryUsedTransactionRefPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TransactionReferenceQueryUsedTransactionRefPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type GetBankTransactionPagingQueryVariables = Exact<{
  bankRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetBankTransactionPagingQuery = { __typename?: 'TransactionReferenceQuery', bankTransactionRefPaging?: Array<{ __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null> | null };

export type GetCustomerTransactionPagingQueryVariables = Exact<{
  customerRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetCustomerTransactionPagingQuery = { __typename?: 'TransactionReferenceQuery', customerTransactionRefPaging?: Array<{ __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null> | null };

export type GetMerchantTransactionPagingQueryVariables = Exact<{
  merchantRef?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetMerchantTransactionPagingQuery = { __typename?: 'TransactionReferenceQuery', merchantTransactionRefPaging?: { __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null };

export type GetUnusedTransactionRefPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetUnusedTransactionRefPagingQuery = { __typename?: 'TransactionReferenceQuery', unusedTransactionRefPaging?: { __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null };

export type GetUsedTransactionRefPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetUsedTransactionRefPagingQuery = { __typename?: 'TransactionReferenceQuery', usedTransactionRefPaging?: { __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null };

export type GetAllTransactionRefPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllTransactionRefPagingQuery = { __typename?: 'TransactionReferenceQuery', allTransactionRefPaging?: { __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null };

export type GetExpiredTransactionRefPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetExpiredTransactionRefPagingQuery = { __typename?: 'TransactionReferenceQuery', expiredTransactionRefPaging?: { __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null };

export type GetActiveTransactionRefPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetActiveTransactionRefPagingQuery = { __typename?: 'TransactionReferenceQuery', activeTransactionRefPaging?: { __typename?: 'TransactionRefPaging', count: number, transactionRefs?: Array<{ __typename?: 'TransactionReferenceNumber', trn: string, customer_ref: string, used: boolean, amount?: any | null, service_id: string, bank_id: string, created_at?: any | null, expiry_date?: any | null, merchant?: { __typename?: 'Merchant', name: string, unique_id: string, id: number } | null, bank?: { __typename?: 'FinancialInstitution', name: string, unique_id: string, id: number } | null } | null> | null } | null };


export const GetBankTransactionPagingDocument = gql`
    query getBankTransactionPaging($bankRef: String, $page: Int, $size: Int) {
  bankTransactionRefPaging(bankRef: $bankRef, page: $page, size: $size) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetBankTransactionPagingQuery__
 *
 * To run a query within a React component, call `useGetBankTransactionPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBankTransactionPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBankTransactionPagingQuery({
 *   variables: {
 *      bankRef: // value for 'bankRef'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetBankTransactionPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetBankTransactionPagingQuery, GetBankTransactionPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBankTransactionPagingQuery, GetBankTransactionPagingQueryVariables>(GetBankTransactionPagingDocument, options);
      }
export function useGetBankTransactionPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBankTransactionPagingQuery, GetBankTransactionPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBankTransactionPagingQuery, GetBankTransactionPagingQueryVariables>(GetBankTransactionPagingDocument, options);
        }
export type GetBankTransactionPagingQueryHookResult = ReturnType<typeof useGetBankTransactionPagingQuery>;
export type GetBankTransactionPagingLazyQueryHookResult = ReturnType<typeof useGetBankTransactionPagingLazyQuery>;
export type GetBankTransactionPagingQueryResult = Apollo.QueryResult<GetBankTransactionPagingQuery, GetBankTransactionPagingQueryVariables>;
export const GetCustomerTransactionPagingDocument = gql`
    query getCustomerTransactionPaging($customerRef: String, $page: Int, $size: Int) {
  customerTransactionRefPaging(
    customerRef: $customerRef
    page: $page
    size: $size
  ) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetCustomerTransactionPagingQuery__
 *
 * To run a query within a React component, call `useGetCustomerTransactionPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerTransactionPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerTransactionPagingQuery({
 *   variables: {
 *      customerRef: // value for 'customerRef'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetCustomerTransactionPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomerTransactionPagingQuery, GetCustomerTransactionPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerTransactionPagingQuery, GetCustomerTransactionPagingQueryVariables>(GetCustomerTransactionPagingDocument, options);
      }
export function useGetCustomerTransactionPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerTransactionPagingQuery, GetCustomerTransactionPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerTransactionPagingQuery, GetCustomerTransactionPagingQueryVariables>(GetCustomerTransactionPagingDocument, options);
        }
export type GetCustomerTransactionPagingQueryHookResult = ReturnType<typeof useGetCustomerTransactionPagingQuery>;
export type GetCustomerTransactionPagingLazyQueryHookResult = ReturnType<typeof useGetCustomerTransactionPagingLazyQuery>;
export type GetCustomerTransactionPagingQueryResult = Apollo.QueryResult<GetCustomerTransactionPagingQuery, GetCustomerTransactionPagingQueryVariables>;
export const GetMerchantTransactionPagingDocument = gql`
    query getMerchantTransactionPaging($merchantRef: String, $page: Int, $size: Int) {
  merchantTransactionRefPaging(
    merchantRef: $merchantRef
    page: $page
    size: $size
  ) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetMerchantTransactionPagingQuery__
 *
 * To run a query within a React component, call `useGetMerchantTransactionPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMerchantTransactionPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMerchantTransactionPagingQuery({
 *   variables: {
 *      merchantRef: // value for 'merchantRef'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetMerchantTransactionPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetMerchantTransactionPagingQuery, GetMerchantTransactionPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMerchantTransactionPagingQuery, GetMerchantTransactionPagingQueryVariables>(GetMerchantTransactionPagingDocument, options);
      }
export function useGetMerchantTransactionPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMerchantTransactionPagingQuery, GetMerchantTransactionPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMerchantTransactionPagingQuery, GetMerchantTransactionPagingQueryVariables>(GetMerchantTransactionPagingDocument, options);
        }
export type GetMerchantTransactionPagingQueryHookResult = ReturnType<typeof useGetMerchantTransactionPagingQuery>;
export type GetMerchantTransactionPagingLazyQueryHookResult = ReturnType<typeof useGetMerchantTransactionPagingLazyQuery>;
export type GetMerchantTransactionPagingQueryResult = Apollo.QueryResult<GetMerchantTransactionPagingQuery, GetMerchantTransactionPagingQueryVariables>;
export const GetUnusedTransactionRefPagingDocument = gql`
    query getUnusedTransactionRefPaging($page: Int, $size: Int) {
  unusedTransactionRefPaging(page: $page, size: $size) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetUnusedTransactionRefPagingQuery__
 *
 * To run a query within a React component, call `useGetUnusedTransactionRefPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnusedTransactionRefPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnusedTransactionRefPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetUnusedTransactionRefPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetUnusedTransactionRefPagingQuery, GetUnusedTransactionRefPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnusedTransactionRefPagingQuery, GetUnusedTransactionRefPagingQueryVariables>(GetUnusedTransactionRefPagingDocument, options);
      }
export function useGetUnusedTransactionRefPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnusedTransactionRefPagingQuery, GetUnusedTransactionRefPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnusedTransactionRefPagingQuery, GetUnusedTransactionRefPagingQueryVariables>(GetUnusedTransactionRefPagingDocument, options);
        }
export type GetUnusedTransactionRefPagingQueryHookResult = ReturnType<typeof useGetUnusedTransactionRefPagingQuery>;
export type GetUnusedTransactionRefPagingLazyQueryHookResult = ReturnType<typeof useGetUnusedTransactionRefPagingLazyQuery>;
export type GetUnusedTransactionRefPagingQueryResult = Apollo.QueryResult<GetUnusedTransactionRefPagingQuery, GetUnusedTransactionRefPagingQueryVariables>;
export const GetUsedTransactionRefPagingDocument = gql`
    query getUsedTransactionRefPaging($page: Int, $size: Int) {
  usedTransactionRefPaging(page: $page, size: $size) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetUsedTransactionRefPagingQuery__
 *
 * To run a query within a React component, call `useGetUsedTransactionRefPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsedTransactionRefPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsedTransactionRefPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetUsedTransactionRefPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetUsedTransactionRefPagingQuery, GetUsedTransactionRefPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsedTransactionRefPagingQuery, GetUsedTransactionRefPagingQueryVariables>(GetUsedTransactionRefPagingDocument, options);
      }
export function useGetUsedTransactionRefPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsedTransactionRefPagingQuery, GetUsedTransactionRefPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsedTransactionRefPagingQuery, GetUsedTransactionRefPagingQueryVariables>(GetUsedTransactionRefPagingDocument, options);
        }
export type GetUsedTransactionRefPagingQueryHookResult = ReturnType<typeof useGetUsedTransactionRefPagingQuery>;
export type GetUsedTransactionRefPagingLazyQueryHookResult = ReturnType<typeof useGetUsedTransactionRefPagingLazyQuery>;
export type GetUsedTransactionRefPagingQueryResult = Apollo.QueryResult<GetUsedTransactionRefPagingQuery, GetUsedTransactionRefPagingQueryVariables>;
export const GetAllTransactionRefPagingDocument = gql`
    query getAllTransactionRefPaging($page: Int, $size: Int) {
  allTransactionRefPaging(page: $page, size: $size) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetAllTransactionRefPagingQuery__
 *
 * To run a query within a React component, call `useGetAllTransactionRefPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTransactionRefPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTransactionRefPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetAllTransactionRefPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTransactionRefPagingQuery, GetAllTransactionRefPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTransactionRefPagingQuery, GetAllTransactionRefPagingQueryVariables>(GetAllTransactionRefPagingDocument, options);
      }
export function useGetAllTransactionRefPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTransactionRefPagingQuery, GetAllTransactionRefPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTransactionRefPagingQuery, GetAllTransactionRefPagingQueryVariables>(GetAllTransactionRefPagingDocument, options);
        }
export type GetAllTransactionRefPagingQueryHookResult = ReturnType<typeof useGetAllTransactionRefPagingQuery>;
export type GetAllTransactionRefPagingLazyQueryHookResult = ReturnType<typeof useGetAllTransactionRefPagingLazyQuery>;
export type GetAllTransactionRefPagingQueryResult = Apollo.QueryResult<GetAllTransactionRefPagingQuery, GetAllTransactionRefPagingQueryVariables>;
export const GetExpiredTransactionRefPagingDocument = gql`
    query getExpiredTransactionRefPaging($page: Int, $size: Int) {
  expiredTransactionRefPaging(page: $page, size: $size) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetExpiredTransactionRefPagingQuery__
 *
 * To run a query within a React component, call `useGetExpiredTransactionRefPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExpiredTransactionRefPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExpiredTransactionRefPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetExpiredTransactionRefPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetExpiredTransactionRefPagingQuery, GetExpiredTransactionRefPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExpiredTransactionRefPagingQuery, GetExpiredTransactionRefPagingQueryVariables>(GetExpiredTransactionRefPagingDocument, options);
      }
export function useGetExpiredTransactionRefPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExpiredTransactionRefPagingQuery, GetExpiredTransactionRefPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExpiredTransactionRefPagingQuery, GetExpiredTransactionRefPagingQueryVariables>(GetExpiredTransactionRefPagingDocument, options);
        }
export type GetExpiredTransactionRefPagingQueryHookResult = ReturnType<typeof useGetExpiredTransactionRefPagingQuery>;
export type GetExpiredTransactionRefPagingLazyQueryHookResult = ReturnType<typeof useGetExpiredTransactionRefPagingLazyQuery>;
export type GetExpiredTransactionRefPagingQueryResult = Apollo.QueryResult<GetExpiredTransactionRefPagingQuery, GetExpiredTransactionRefPagingQueryVariables>;
export const GetActiveTransactionRefPagingDocument = gql`
    query getActiveTransactionRefPaging($page: Int, $size: Int) {
  activeTransactionRefPaging(page: $page, size: $size) {
    count
    transactionRefs {
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
}
    `;

/**
 * __useGetActiveTransactionRefPagingQuery__
 *
 * To run a query within a React component, call `useGetActiveTransactionRefPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveTransactionRefPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveTransactionRefPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetActiveTransactionRefPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveTransactionRefPagingQuery, GetActiveTransactionRefPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActiveTransactionRefPagingQuery, GetActiveTransactionRefPagingQueryVariables>(GetActiveTransactionRefPagingDocument, options);
      }
export function useGetActiveTransactionRefPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveTransactionRefPagingQuery, GetActiveTransactionRefPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActiveTransactionRefPagingQuery, GetActiveTransactionRefPagingQueryVariables>(GetActiveTransactionRefPagingDocument, options);
        }
export type GetActiveTransactionRefPagingQueryHookResult = ReturnType<typeof useGetActiveTransactionRefPagingQuery>;
export type GetActiveTransactionRefPagingLazyQueryHookResult = ReturnType<typeof useGetActiveTransactionRefPagingLazyQuery>;
export type GetActiveTransactionRefPagingQueryResult = Apollo.QueryResult<GetActiveTransactionRefPagingQuery, GetActiveTransactionRefPagingQueryVariables>;