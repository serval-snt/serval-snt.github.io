import React, {Component} from "react"
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker'
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css"

class GridDatePicker extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: new Date(props.value)
    }
  }

  getInputNode() {
    return ReactDOM.findDOMNode(this);
  }

  setDate(date) {
    this.setState(
      {value: date},
      () => this.props.onCommit() 
    )
  }

  getValue = () => {  
    return { date: moment(this.state.value).format('YYYY-MM-DD') };
  }

  getStyle = () => {
    return {
      width: '100%',
      height: '100%'
    }
  }

  disableStyle = () => {
    return {
      backgroundColor: '#A4A4A4',
      fontWeight: 600,
      color: '#FFF'
    }
  }

  render() {
    return (
      <DatePicker
        inline
        showPopperArrow={false}
        dateFormat="yyyy-MM-dd"
        selected={this.state.value}
        onChange={date => this.setDate(date)}
    />)
  }
}

export default GridDatePicker;