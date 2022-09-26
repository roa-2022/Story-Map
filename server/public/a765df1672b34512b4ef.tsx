import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import store from './store';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  /*#__PURE__*/

  /**
   * Auth0Provider is a component that has a hook that provides
   * all authorization operations
   *
   * TODO: replace the empty strings below with your own domain, clientId, and audience
   */
  React.createElement(Auth0Provider, {
    domain: "roa-2022-amy1.au.auth0.com",
    clientId: "HdzEPlCSYW22Wq2GPBCxomFKm8xeIZfd",
    redirectUri: window.location.origin,
    audience: "https://storymap/api"
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null)))), document.getElementById('app'));
});