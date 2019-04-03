import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';



const QueryWrapper = props => {


  function onChange(newValue) {
    props.updateCodeInput(newValue);
  }
  return (
    <div className="ace-wrapper">
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        value={props.codeInput}
        name="ace-editor"
      // editorProps={{ $blockScrolling: true }}
      />
    </div>
  )
};

export default QueryWrapper;