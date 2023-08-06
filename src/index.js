import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './Navbar';
import Footer from './Footer';

ReactDOM.render(
  <>
    <Auth0Provider
      domain="dev-gz44v1zmjnu7qk0x.us.auth0.com"
      clientId="PWE7dff0sosl4WjqRHD5AWGWwb0X4rFo"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </Auth0Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
