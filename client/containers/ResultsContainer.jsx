import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DataVis from '../components/DataVis.jsx';

import styles from './../styles/ResultsContainer.scss'

const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput,
  dataResults: store.app.dataResults,
  networkLatency: store.app.networkLatency,
  visObj: store.app.dataVis.visObj
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ResultsContainer = props => {

  let resultsArr = [];
  let counter = 0;

  return (
    <React.Fragment>
      <DataVis visObj={props.visObj} />
      <div id="results-wrapper">
        {resultsArr}
      </div>
    </React.Fragment>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
