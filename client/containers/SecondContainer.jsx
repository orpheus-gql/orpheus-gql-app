import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';


// Import Children

import Query from '../components/Query.jsx';
import Resolver from '../components/Resolver.jsx';

const mapStateToProps = (store) => ({

})

const mapDispatchToProps = dispatch => ({


})

class SecondContainer extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {

  };

  render() {
    return (
      <React.Fragment>
        <Query/>
        <Resolver/>
      </React.Fragment>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondContainer);