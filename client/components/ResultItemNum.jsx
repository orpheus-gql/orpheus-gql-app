import React from 'react';
import styles from './../styles/ResultItemNum.scss'


const ResultItemNum = props => {
  // console.log('here are props', props)
  if (props.headline !== 'Effective Runtime') {
    return (
      <div className={`r${props.id} result-item`}>

        <div className="result-header">
          <h5>{props.headline}</h5>
        </div>
        <div className="result-value">
          {props.value}</div>

      </div>
    )
  } else {
    return (
      <div className={`r${props.id} result-item`}>

        <div className="result-header">
          <h5>{props.headline}</h5>
        </div>
        <div className="result-value">
          {props.value}s</div>

        <div className="more-data">
          <h6>Network Latency: {props.networkLatency}s</h6>
        </div>

      </div>
    )
  }
};

export default ResultItemNum;