import React, { Component } from 'react';
import * as actions from "./actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import styles
import styles from './styles/main.scss';

// import main container
// import MainContainer from './containers/MainContainer.jsx';
// import SecondContainer from './containers/SecondContainer.jsx';
import Header from './components/Header.jsx';
import QueryContainer from './containers/QueryContainer.jsx'
import ResultsContainer from './containers/ResultsContainer.jsx';
import ResultItemVis from './components/ResultItemVis.jsx'

const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const App = props => {

  const getCode = () => {
    return props.codeInput;
  }

  const sendQuery = () => new Promise((resolve, reject) => {
    
    const code = getCode();
  
    fetch(`http://localhost:8080/orpheus/graphql?query=` + code)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log('this is myJson', myJson);
      resolve();
    });
  });

  const getResults = () => new Promise((resolve, reject) => {
    fetch(`http://localhost:3500/requests`)
      .then(res => res.json())
      .then(res => {
        // below sets db requests in results container
        let requestArr = res.requests;
        props.setDatabaseRequests(requestArr.length)
        // below sets effective runtime in results container
        let effectiveRunTime = 0;
        requestArr.forEach( (element) => {
          if(element.time) {
            effectiveRunTime += element.time
          }
        })
        props.setEffectiveRuntime( ((effectiveRunTime % 60000) / 1000).toFixed(1))
        resolve();
      })
  });
    
  

  return (
    <div>
      <Header />
      <div id="content">
        <QueryContainer />

        <button className="waves-effect waves-light btn-large" onClick={async () => {
          await sendQuery();
          await getResults();
        }
        }>Run</button>
        <ResultsContainer />
        <ResultItemVis />
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
