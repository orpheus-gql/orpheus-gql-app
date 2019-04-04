import React, { Component } from 'react';
import * as actions from "./actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import styles
import styles from './styles/App.scss';

import Header from './components/Header.jsx';
import QueryContainer from './containers/QueryContainer.jsx'
import ResultsContainer from './containers/ResultsContainer.jsx';
import ResultItemVis from './components/ResultItemVis.jsx';

import dataPointsConstructor from '../orpheus/orpheus/dataPoints';

let dpc = new dataPointsConstructor()


const mapStateToProps = (store) => ({
  codeInput: store.app.codeInput,
  dataVis: store.app.dataVis,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <div id="content">
        <QueryContainer />
<<<<<<< HEAD
        <ResultItemVis dataVis={props.dataVis} />
=======
        <ResultItemVis 
        dataVis={props.dataVis} />
>>>>>>> f7c0ac5431fa4b4e50700e1988eb942946a3d699
        <ResultsContainer />
      </div>
    </React.Fragment>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
