import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './data/datasource/localstorage/store';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { BASE_URL, MERCHANTS_GRAPH_URL } from './data/datasource/api/constant';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { graphQLTransactionClient } from './data/datasource/graphql/Client/client';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="910954487127-0srhnmk5l3t5bs9qncefdok97es7pm42.apps.googleusercontent.com">
  <React.StrictMode>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
     <ApolloProvider client={graphQLTransactionClient}>
      <Provider store={store}>
        <App />
      </Provider>
     </ApolloProvider>
     </BrowserRouter>
    
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
