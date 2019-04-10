import React from 'react';
import styles from './../styles/ResultItemNum.scss'


const ResultItemNum = props => {
  // console.log('here are props', props)
  if (props.headline !== 'Runtime') {
    // renders most of our numeric output
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
    // renders additional line and s for the "timing" display
    return (
      <div className={`r${props.id} result-item`}>

        <div className="result-header">
          <h5>{props.headline}</h5>
        </div>
        <div className="result-value">
          {props.value} {props.value ? 's' : ''}</div>
        {/* hidden b/c we don't have pings for pg db*/}
        <div style={{ 'display': 'none' }} className="more-data">
          <h6>Network Latency: {props.networkLatency}{props.networkLatency ? 's' : ''}</h6>
        </div>

      </div>
    )
  }
};

export default ResultItemNum;