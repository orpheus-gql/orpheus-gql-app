import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';


// Import Children

import Header from '../components/Header.jsx';

const mapStateToProps = (store) => ({

})

const mapDispatchToProps = dispatch => ({


})

class MainContainer extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {

  };

  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);