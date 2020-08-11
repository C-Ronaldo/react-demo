import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    showColorPicker: false
  }
  static getDerivedStateFromProps(props) {
    if ('color' in props) {
      return {
        color: props.color,
      };
    }
    return null;
  }
  handleColorChange = color => {
    const { onChange } = this.props;
    onChange(color.hex);
  }
  handleChangeComplete = color => {
  }
  handleClick() {
    const {showColorPicker} = this.state;
    console.log("colorClick==",showColorPicker);
    this.setState({
      showColorPicker: !showColorPicker
    })
  }
  handleClose = () => {
    this.setState({
      showColorPicker: false
    })
  }
  render() {
    // const {color} = this.props;
    const { color, showColorPicker } = this.state;
    const styles = {
      swatch: {
        padding: "4px",
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
        display: "inline-block",
        cursor: "pointer"
      },
      color: {
        width: "20px",
        height: "16px",
        borderRadius: "2px",
        background: color
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      wrapper: {
        position: 'inherit',
        zIndex: '100',
        transform: 'translateX(-50%)',
        color: '#000',
      }
    }
    const picker = showColorPicker ? (
      <div style={styles.popover} >
        <div style={styles.cover} onClick={this.handleClose} />
        <div style={styles.wrapper}>
          <SketchPicker {...this.props} color={color} onChange={this.handleColorChange} onChangeComplete={this.handleChangeComplete} />
        </div>
      </div>
    ) : null;
    return (
      <div className="color-picker">
        <div style={styles.swatch}>
          <div style={styles.color} onClick={() => { this.handleClick() }}></div>
        </div>
        {picker}
      </div>
    );
  }
}

export default ColorPicker;
