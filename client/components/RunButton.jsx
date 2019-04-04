import React, { Component } from 'react';
import dataPointsConstructor from './../../orpheus/orpheus/dataPoints';
let dpc = new dataPointsConstructor();


import styles from './../styles/RunButton.scss';


const RunButton = props => {

  const sendQuery = () => new Promise((resolve, reject) => {
    const code = props.codeInput;
    fetch(`http://localhost:3500/graphql?query=` + code)
      .then(function (response) {
        if (response.status !== 200) {
          return window.alert('Please refactor your query')
        }
        return response.json();
      })
      .then(function (myJson) {
        dpc = new dataPointsConstructor();
        dpc.getInfo(myJson)
        props.setDataPoints(dpc.dataPoints)
        props.setNestingDepth(dpc.nestingDepth)
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
        });
        // figure out the number of resolvers
        const resolveNum = Object.keys(res.counts).length;
        props.setResolverNum(resolveNum);
<<<<<<< HEAD
        const resolverNames = Object.keys(res.counts);

        props.setResolverNames(resolverNames);
=======

        const resolverNames = Object.keys(res.counts);

        props.setResolverNames(resolverNames)

>>>>>>> f7c0ac5431fa4b4e50700e1988eb942946a3d699
        let average = (effectiveRunTime / requestArr.length)
        props.setEffectiveRuntime((average / 1000).toFixed(1))
        resolve();
      })
  });

  const getNetworkLatency = () => new Promise((resolve, reject) => {
    fetch(`http://localhost:3500/netStats`)
      .then(res => res.json())
      .then(res => {
        let netStatsArr = res.history;
        let networkLatency = netStatsArr[netStatsArr.length - 1];
        props.setNetworkLatency((networkLatency / 1000).toFixed(2))
        // console.log((networkLatency / 1000).toFixed(2))
        // resolve();
      })
  });

  const resetResults = () => new Promise((resolve, reject) => {
    fetch(`http://localhost:3500/reset`)
      .then(res => res.json())
    resolve();
  })

  return (
    <React.Fragment>
      <button className="run" onClick={async () => {
        await resetResults();
        await sendQuery();
        await getResults();
        // await setInterval(getNetworkLatency, 500);
      }
      }>Run</button>
    </React.Fragment>
  )
}
export default RunButton;
