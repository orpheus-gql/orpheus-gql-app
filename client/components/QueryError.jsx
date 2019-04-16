import React from 'react';

const QueryError = (props) => {
  return (
    <React.Fragment>
      <h2>There is something wrong with your query ¯\_(ツ)_/¯</h2>
      <h2>Please refactor your query and try again</h2>
    </React.Fragment>
  )
};

export default QueryError;