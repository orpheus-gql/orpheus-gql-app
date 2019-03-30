import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import Children

import Query from '../components/Query.jsx';
import QueryEditor from '../components/QueryEditor.jsx';
import Resolver from '../components/Resolver.jsx';

const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const SecondContainer = props => (
  <React.Fragment>
    <Query codeInput={props.codeInput} updateCodeInput={props.updateCodeInput} />
    <QueryEditor />
    <Resolver />
  </React.Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(SecondContainer);