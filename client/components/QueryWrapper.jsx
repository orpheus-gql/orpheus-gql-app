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
        highlightActiveLine={false}
        fontSize={10}
        showPrintMargin={false}
        showGutter={true}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
      />


    </div>
  )
};

export default QueryWrapper;
