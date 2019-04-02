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
import ResultsContainer from './containers/ResultsContainer.jsx'

const mapStateToProps = (store) => ({
})

const mapDispatchToProps = dispatch => ({
})

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Header />
        <div id="content">
        <QueryContainer />
        <button class="waves-effect waves-light btn-large run-button">Run</button>
        <ResultsContainer />
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
