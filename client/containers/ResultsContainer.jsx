import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './../styles/ResultsContainer.scss'

// Import Children
import ResultItemNum from '../components/ResultItemNum.jsx';

const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput,
  dataResults: store.app.dataResults,
  networkLatency: store.app.networkLatency
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ResultsContainer = props => {

  let resultsArr = [];
  let counter = 0;

  for (let key in props.dataResults) {
    if (key != 'Effective Runtime') {
      counter += 1
      resultsArr.push(
        <ResultItemNum
          key={key}
          headline={key}
          value={props.dataResults[key]}
          id={counter}
        />)
    } else {
      counter += 1
      resultsArr.push(
        <ResultItemNum
          key={key}
          headline={key}
          value={props.dataResults[key]}
          id={counter}
          networkLatency={props.networkLatency}
        />)
    }
  }

  return (
    <React.Fragment>
      <div id="results-wrapper">
        {resultsArr}
      </div>
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);