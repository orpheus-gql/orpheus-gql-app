import React, { Component } from 'react';

import DataParser from '../controllers/DataParser';
let dpc = new DataParser();

import styles from './../styles/RunButton.scss';

const RunButton = props => {

  const updateCodeHistory = () => new Promise((resolve, reject) => {
    props.updateCodeHistory(props.codeInput);
    resolve();
  }); 
  
  const sendQuery = () => new Promise((resolve, reject) => {
    const code = props.codeInput;
    const context = `&context={startTime: Date.now()}`;
    fetch(`http://localhost:3500/graphql?query=` + code + context)
      .then(function (response) {
        if (response.status !== 200) {
          return window.alert('Please refactor your query');
        }
        return response.json();
      })
      .then(function (myJson) {
        dpc = new DataParser();
        RunButton.dpc = dpc; //FOR TESTING. REMOVE LATER
        dpc.getInfo(myJson.data);
        props.storeResponseData(myJson.data)
        props.buildTreeVis(dpc.buildVis(myJson.data))
        props.setDataPoints(dpc.dataPoints)
        props.setNestingDepth(dpc.nestingDepth)
        props.setEffectiveRuntime((myJson.extensions.runTime / 1000).toFixed(1))
        resolve();
      });
  });

  return (
    <React.Fragment>
      <button className="run" onClick={async () => {
        await updateCodeHistory();
        await sendQuery();
        // await setInterval(getNetworkLatency, 500);
      }
      }>Run</button>
    </React.Fragment>
  )
}
export default RunButton;
