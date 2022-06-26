// Main Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/Redux/store';

// Main CSS
import './index.css';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// Main Component
import App from './App/App';

// Service Worker PWA
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Web Analytics
import reportWebVitals from './reportWebVitals';

// App
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
