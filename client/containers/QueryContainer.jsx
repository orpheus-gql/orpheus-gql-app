import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import Children
import QueryWrapper from '../components/QueryWrapper.jsx';

const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const QueryContainer = props => (
  <React.Fragment>
    <QueryWrapper
      codeInput={props.codeInput}
      buildTreeVis={props.buildTreeVis}
      storeResponseData={props.storeResponseData}
      updateCodeInput={props.updateCodeInput}
      setDatabaseRequests={props.setDatabaseRequests}
      setDataPoints = {props.setDataPoints}
      setNestingDepth = {props.setNestingDepth}
      setEffectiveRuntime={props.setEffectiveRuntime}
      setDataPoints={props.setDataPoints}
      setNestingDepth={props.setNestingDepth}
      setNetworkLatency={props.setNetworkLatency}
      setResolverNum={props.setResolverNum}
      setResolverNames={props.setResolverNames} 
  />
  </React.Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);
