import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import singleSpaReact from "single-spa-react";

import rootComponent from "./App2";
import { StoreManager } from './store';

const storeManager = new StoreManager();

export const { bootstrap, mount, unmount } = singleSpaReact({
    React,
    ReactDOM,
    loadRootComponent: () => {
      return Promise.resolve().then(() => {
            console.log('load App2');
            const randomData = {
              title: "Well, App2 title is: " + Math.random()
            }
            storeManager.initStore(randomData);
            let store = storeManager.getStore();

            function initApp() {
              return React.createElement(Provider, { store }, React.createElement(rootComponent));
            }
          return initApp;
        });
    },
    errorBoundary(err, info, props) {
      // https://reactjs.org/docs/error-boundaries.html
      return <div>This renders when a catastrophic error occurs</div>;
    },
    renderType: 'render',
    domElementGetter: () => document.querySelector('.js-react-container')
});