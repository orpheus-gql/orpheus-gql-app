import React, { Component } from 'react';
import * as actions from "./actions/actions";
import { connect } from 'react-redux';

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

const mapDispatchToProps = dispatch => ({
})

const App = props => {

  const getCode = () => {
    return props.codeInput;
  }

  const sendQuery = () => {
    const code = getCode();
    console.log(code);
    const cleanCode = code.replace(/\s/g, "")
    // const codeJSON = JSON.parse(code);
    console.log(cleanCode);

    fetch(`http://localhost:8080/orpheus/graphql?query=` + cleanCode)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }
  return (
    <div>
      <Header />
      <div id="content">
        <QueryContainer />
        <div className="button-wrapper">
          <button className="waves-effect waves-light btn-large" onClick={sendQuery}>Run</button>
        </div>
        <ResultsContainer />
        <ResultItemVis />
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
