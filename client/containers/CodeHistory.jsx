import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../styles/CodeHistory.scss'

const mapStateToProps = (store) => ({
  codeHistory: store.app.codeHistory,
  showHistory: store.app.showHistory
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const CodeHistoryContainer = props => {
  let codeHistory = props.codeHistory.slice(0,5);
  let codeHistoryArr = [];

    for(let i = 0; i < codeHistory.length; i+= 1) {
      codeHistoryArr.push(
        <p className={`code-history`} 
        key={i}
        oldcode={codeHistory[i]}
        onClick={(e)=>{props.updateCodeInput(e.target.getAttribute('oldcode'))}}>
        {codeHistory[i]}
        </p>
      )
    }

    function onClick(oldCode) {
      props.updateCodeInput(oldCode);
    }
    
  return (
    <div className={`code-history-wrapper ${props.showHistory ? '' : 'off'}`}>
    {codeHistoryArr}
    </div>
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(CodeHistoryContainer);