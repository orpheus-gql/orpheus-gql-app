import React from 'react';


const ResultItemNum = props => {
  // console.log('here are props', props)
  if(props.headline !== 'Effective Runtime') {
  return (
    <div className={`r${props.id} result-item`}>

      <div className="result-header">
      <h5>{props.headline}</h5>
      </div>
      <span className="result-value">
      {props.value}</span>

    </div>
  )
} else {

    return (
      <div className={`r${props.id} result-item`}>
      
      <div className="result-header">
      <h5>{props.headline}</h5>
      </div>
      <span className="result-value">
      {props.value} {props.value ? 's':''}</span>
      
      <div className="more-data">
      <h6>Network Latency: {props.networkLatency}{props.networkLatency ? 's': ''}</h6>
      </div>
      
      </div>
      )
    
}
};

export default ResultItemNum;