import React, { Component } from 'react';


import styles from './../styles/RunButton.scss';


const RunButton = props => {

  const sendQuery = () => new Promise((resolve, reject) => {
    const code = props.codeInput;
    fetch(`http://localhost:8080/orpheus/graphql?query=` + code)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log('this is myJson', myJson);
        resolve();
      });
  });

  const getResults = () => new Promise((resolve, reject) => {
    fetch(`http://localhost:3500/requests`)
      .then(res => res.json())
      .then(res => {
        // below sets db requests in results container
        let requestArr = res.requests;
        props.setDatabaseRequests(requestArr.length)
        // below sets effective runtime in results container
        let effectiveRunTime = 0;
        requestArr.forEach((element) => {
          if (element.time) {
            effectiveRunTime += element.time
          }
        })
        props.setEffectiveRuntime(((effectiveRunTime % 60000) / 1000).toFixed(1))
        resolve();
      })
  });

  return (
    <React.Fragment>
      <button className="run" onClick={async () => {
        await sendQuery();
        await getResults();
      }
      }>Run</button>
    </React.Fragment>
  )
}
export default RunButton;
