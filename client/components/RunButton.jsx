import React, {Component} from 'react';

import DataParser from '../controllers/DataParser';
import styles from './../styles/RunButton.scss';
let dpc = new DataParser();

const RunButton = props => {
  const updateCodeHistory = () =>
    new Promise((resolve, reject) => {
      props.updateCodeHistory(props.codeInput);
      resolve();
    });

  const sendQuery = () =>
    new Promise((resolve, reject) => {
      const code = props.codeInput;
      fetch(`${__gqlapi}?query=` + code)
        .then(function(response) {
          if (response.status !== 200) {
            props.setQueryErrorStatus(true);
            return;
          }
          props.setQueryErrorStatus(false);
          return response.json();
        })
        .then(function(myJson) {
          dpc = new DataParser();
          RunButton.dpc = dpc; //FOR TESTING. REMOVE LATER
          dpc.getInfo(myJson.data);
          props.storeResponseData(myJson.data);
          props.buildTreeVis(dpc.buildVis(myJson.data));
          props.setDataPoints(dpc.dataPoints);
          props.setNestingDepth(dpc.nestingDepth);
          props.setEffectiveRuntime(
            (myJson.extensions.runTime / 1000).toFixed(1),
          );
        });
    });

  return (
    <button
      className="run"
      onClick={async () => {
        await updateCodeHistory();
        await sendQuery();
      }}>
      Run
    </button>
  );
};
export default RunButton;
