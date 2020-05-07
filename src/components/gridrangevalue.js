import React, { Component } from "react"
import ReactDOM from "react-dom"

class GridRangeValues extends Component {
  constructor(props) {
    super(props)

    console.log(props)

    this.state = {
      value: props.value,
    }
  }

  getInputNode() {
    return ReactDOM.findDOMNode(this)
  }

  onBlur = () => {
    this.props.onCommit()
  }

  onChange = event => {
    this.setState({
      [this.props.column.key]: Math.min(100, Math.max(0, event.target.value)),
    })
  }

  getValue = () => {
    return { value: this.state.value }
  }

  getStyle = () => {
    return {
      width: "100%",
      height: "100%",
    }
  }

  disableStyle = () => {
    return {
      backgroundColor: "#A4A4A4",
      fontWeight: 600,
      color: "#FFF",
    }
  }

  render() {
    return (
      <input
        type="number"
        min={this.props.min}
        max={this.props.max}
        style={this.getStyle()}
        value={this.state.value}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    )
  }
}

export default GridRangeValues
