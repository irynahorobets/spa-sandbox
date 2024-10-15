import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import singleSpaReact from "single-spa-react";

import RootComponent from "./App1";
import { getStore, INIT_APP1 } from './store';

let store = getStore();

export const { bootstrap, mount, unmount } = singleSpaReact({
    React,
    ReactDOM,
    bootstrap: () => {
        store = getStore();
        return Promise.resolve();
    },
    loadRootComponent: async () => {
        const randomData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    title: "Title passes from mount: " + Math.random()
                });
            }, 1000);
        });
        store.dispatch({ type: INIT_APP1, payload: randomData });
        
        return Promise.resolve().then(() => {
            console.log('load App1');
            
            function initApp() {
                return (
                    <Provider store={store}>
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