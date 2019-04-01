import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import { updateCodeEditorInput } from '../actions/actions';


class QueryEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'code': ''
    }
  }
  editorDidMount(editor, monaco) {
    // console.log('editorDidMount', editor);
    // editor.focus();
    // <MonacoEditor ref="monaco"/>
  }
  onChange(newValue, e) {
    // console.log('onChange', newValue, e);
    this.setState((prevState, props)=> {
      return {
        code: newValue
      }
    })
  }
  render() {
    // console.log(monaco.editor)
    // var model = monaco.editor.createModel('wisdom')
    // const value = model.getValue();
    // console.log(value)
    // const model = monaco.editor.getModel();
    // const value = model.getValue();
    // console.log(model)
    // console.log(value)

    return (
      <MonacoEditor
        height="400"
        language="javascript"
        theme="vs-light"
        value={this.codeEditorInput}
        options={{ 
        language: "javascript", 
        minimap: { enabled: false }, 
        showUnused: true, 
        wordWrap: "on", 
        autoIndent: true, 
        fontSize: 16, 
        formatOnPaste: true, 
        formatOnType: true }}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default QueryEditor
