import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Children
import ResultItemNum from '../components/ResultItemNum.jsx';
import ResultItemVis from '../components/ResultItemVis.jsx';

const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ResultsContainer = props => (
  <React.Fragment>
    <ResultItemNum />
    <ResultItemVis />
  </React.Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);