import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import singleSpaReact from "single-spa-react";

import RootComponent from "./App1";
import { StoreManager } from './store';

const storeManager = new StoreManager();

export const { bootstrap, mount, unmount } = singleSpaReact({
    React,
    ReactDOM,
    bootstrap: () => {
        store = getStore();
        return Promise.resolve();
    },
    loadRootComponent: () => {
        return Promise.resolve().then(() => {
            const randomData = {
                title: "Title passes from mount: " + Math.random()
            }
            console.log('load App1: ', randomData);
            storeManager.initializeStore(randomData);
            
            function initApp() {
                return (
                    <Provider store={storeManager.getStore()}>
                      <RootComponent />
                    </Provider>
                  );
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