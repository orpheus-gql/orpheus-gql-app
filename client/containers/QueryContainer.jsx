import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import Children
import Query from '../components/Query.jsx';
import QueryEditor from '../components/QueryEditor.jsx';

const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput,
  codeEditorInput: store.app.codeEditorInput
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const QueryContainer = props => (
  <React.Fragment>
    <Query codeInput={props.codeInput} 
    updateCodeInput={props.updateCodeInput} />

    <QueryEditor 
    codeEditorInput={props.codeEditorInput} 
    updateCodeEditorInput={props.updateCodeEditorInput}/>
  </React.Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);