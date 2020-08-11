import React from 'react';
// import logo from './logo.svg';
import less from "less";
import './App.less';
import { Button } from "antd";
import { SketchPicker } from 'react-color';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      primaryColor: ""
    }
  }
  handleClick() {
    less.modifyVars({
      "@primary-color": "red"
    }).then(() => {
      console.log("success")
    })
  }
  handleColorChange = color => {
    this.setState({ primaryColor: color.hex })
    console.log(color)
    less.modifyVars({
      "@primary-color": color.hex
    }).then(() => {
      console.log("success")
    })
  }
  handleChangeComplete = color => {
    console.log("color=", color)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button className="btn" onClick={() => { this.handleClick() }}>Default Button</Button>
          <div className="text-change">colorChange</div>
          <SketchPicker color={this.state.primaryColor} onChange={this.handleColorChange} onChangeComplete={this.handleChangeComplete} presetColors={[
            '#13C2C2',
            '#18BFFF',
            '#2F54EB',
            '#722ED1',
            '#EB2F96',
            '#F5222D',
            '#FA541C',
            '#FA8C16',
            '#FAAD14',
            '#E1C40B',
            '#A0D911',
            '#52C41A',
          ]} />
        </header>
      </div>
    );
  }
}

export default App;
