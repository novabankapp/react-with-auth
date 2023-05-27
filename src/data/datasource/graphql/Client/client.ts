import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
import { tokenManager } from "../../api/token";
import { BANKS_GRAPH_URL, BASE_URL, MERCHANTS_GRAPH_URL, TRANSACTIONS_GRAPH_URL } from "../../api/constant";


const authLink = setContext((_, { headers }) => {
    
    const token  = tokenManager.getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const resetTokenLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
    
        switch (err.extensions.code) {
          // Apollo Server sets code to UNAUTHENTICATED
          // when an AuthenticationError is thrown in a resolver
          case "UNAUTHENTICATED":
            // Modify the operation context with a new token
            const oldHeaders = operation.getContext().headers;
            operation.setContext({
              headers: {
                ...oldHeaders,
                //authorization: getNewToken(),
              },
            });
            // Retry the request, returning the new observable
            return forward(operation);
        }
      }
    }
  
    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const merchantQL = new HttpLink({
    uri: `${BASE_URL}${MERCHANTS_GRAPH_URL}`,
  })
  authLink.concat(merchantQL)

  export const graphQLMerchantClient = new ApolloClient({
    link:  ApolloLink.from([ errorLink, authLink,merchantQL])
    ,
    cache: new InMemoryCache(),
  });

  const banksQL = new HttpLink({
    uri: `${BASE_URL}${BANKS_GRAPH_URL}`,
  })
  export const graphQLBankClient = new ApolloClient({
    link:   ApolloLink.from([ errorLink, authLink,banksQL]),
    cache: new InMemoryCache(),

  });

  const transactionQL = new HttpLink({
    uri: `${BASE_URL}${TRANSACTIONS_GRAPH_URL}`,
  })
  export const graphQLTransactionClient = new ApolloClient({
    link:   ApolloLink.from([ errorLink, authLink,transactionQL])
    ,
    cache: new InMemoryCache(),
  });

  


  