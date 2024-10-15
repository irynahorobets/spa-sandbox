import React from "react";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        title: state.title
    };
}

function App1({ title = '' }) {
  return <h1>App1: {title}</h1>;
}


export default connect(mapStateToProps, {})(App1)