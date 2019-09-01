import React from 'react';

const ResultItemNum = props => {
  return (
    <div className={`r${props.id} result-item`}>
      <h5 className="result-header">{props.headline}:</h5>
      <span className="result-value">{props.value}</span>
    </div>
  );
};

export default ResultItemNum;
