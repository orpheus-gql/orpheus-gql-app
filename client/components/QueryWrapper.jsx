import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';



const QueryWrapper = props => {
  const getCode = () => {
    return props.codeInput;
  }

  const sendQuery = () => {
    const code = getCode();
    console.log(code);
    const cleanCode = code.replace(/\s/g, "")
    // const codeJSON = JSON.parse(code);
    console.log(cleanCode);

    fetch(`http://localhost:8080/orpheus/graphql?query=` + cleanCode)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }

  function onChange(newValue) {
    props.updateCodeInput(newValue);
  }
  return (
    <div className="ace-editor">
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        value={props.codeInput}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      <button className="waves-effect waves-light btn-large" onClick={sendQuery}>Run</button>
    </div>
  )
};

export default QueryWrapper;