import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/mode/javascript';
import 'brace/theme/gruvbox';

import styles from './../styles/QueryWrapper.scss';

import RunButton from './RunButton.jsx'


const QueryWrapper = props => {


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
      <RunButton setEffectiveRuntime={props.setEffectiveRuntime} setDatabaseRequests={props.setDatabaseRequests} codeInput={props.codeInput} />
    </div>
  )
};

export default QueryWrapper;