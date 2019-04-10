import React from 'react';
import brace from 'brace'; //dependency for ace editor; imports lang + themes
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/mode/javascript';
import 'brace/theme/gruvbox';

import styles from './../styles/QueryWrapper.scss';

import RunButton from './RunButton.jsx'

// component that provides editor for users to enter GQL request
const QueryWrapper = props => {

  // updates redux store as it gets new input
  function onChange(newValue) {
    props.updateCodeInput(newValue);
  }
  return (
    <div className="ace-wrapper">
      <AceEditor
        mode="json"
        theme="gruvbox"
        onChange={onChange}
        value={props.codeInput}
        name="ace-editor"
        fontSize={18}
        showPrintMargin={false}
        showGutter={false}
        setOptions={{
          showLineNumbers: false,
          tabSize: 2,
        }}
      />
      <RunButton setDataPoints={props.setDataPoints}
        setNestingDepth={props.setNestingDepth}
        setNetworkLatency={props.setNetworkLatency}
        setEffectiveRuntime={props.setEffectiveRuntime}
        setDatabaseRequests={props.setDatabaseRequests}
        codeInput={props.codeInput}
        setResolverNum={props.setResolverNum}
        setResolverNames={props.setResolverNames}
      />
    </div>
  )
};

export default QueryWrapper;