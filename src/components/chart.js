import React from "react"
import d3_timeseries from "d3-timeseries"
import Button from '@material-ui/core/Button';
import styled from "@emotion/styled"

const Toggler = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

class ChartComponent extends React.Component {

    labels = {"toggle-cases":"Total cases",
          "toggle-hispitals":"Benign hospitaliations",
          "toggle-critical": "Critical hospitalitalizations",
          "toggle-deaths":"Total deaths",
          "toggle-ci" :"Confidence intervals" }

    constructor(props){
        super(props);

        this.state = {
            show_cases: true,
            show_hospital: false,
            show_critical: false,
            show_deaths: false,
            show_rate:false,
            show_ci: true
        }
    }
    
    componentDidMount() {
        this.drawChart();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state || prevProps !== this.props) {
            this.drawChart();
        }
    }

    drawChart(){
        let chart = d3_timeseries();


        let series_counter = this.addSeries(chart, 'SimulationCases', 'Total cases', '#a6cee3', this.state.show_cases);
        series_counter += this.addSeries(chart, 'SimulationHospital', 'Hospitalizations', '#00ff22', this.state.show_hospital);
        series_counter += this.addSeries(chart, 'SimulationCritical', 'Critical hospitalizations', '#ff7700', this.state.show_critical);
        series_counter += this.addSeries(chart, 'SimulationDeaths', 'Total deaths', '#ff0008', this.state.show_deaths);
        series_counter += this.addSeries(chart, 'R', 'Reproduction rate', '#420042', this.state.show_rate);

        if(series_counter === 0){
            console.log("empty series")
            this.setState({
                show_cases: true,
                show_hospital: false,
                show_critical: false,
                show_deaths: false
            });
        }
        else{
            chart
                .margin({top: 10, bottom: 20, left: 60, right: 10})
                .width(1000);
        

            document.getElementById('chart').innerHTML = '';
            document.getElementsByClassName('d3_timeseries tooltip').innerHTML = '';
            chart('#chart');
        }
    }

    addSeries(chart, column, label, color, show){
        if(show){
            if(this.state.show_ci){
                chart.addSerie(this.props.data, {x:'Date',y:column,ci_up:column + '_max',ci_down:column + '_min'}, {interpolate:'linear', color:color,label:label});
            }
            else{
                chart.addSerie(this.props.data, {x:'Date',y:column}, {interpolate:'linear', color:color,label:label});
            }

            return 1;
        }

        return 0;
    }

    handleToggle(e){
        switch (e) {
            case "toggle-cases": this.setState(state => ({show_cases: !state.show_cases})); break;
            case "toggle-hospital": this.setState(state => ({show_hospital: !state.show_hospital})); break;
            case "toggle-critical": this.setState(state => ({show_critical: !state.show_critical})); break;
            case "toggle-deaths": this.setState(state => ({show_deaths: !state.show_deaths})); break;
            case "toggle-rate": this.setState(state => ({show_rate: !state.show_rate})); break;
            case "toggle-ci": this.setState(state => ({show_ci: !state.show_ci})); break;
            default: console.error("unhandled event: " + e.target.id); break;
        }
    }

    render() {

        return (
            <div id="chart-area">
                <Toggler> 
                    <Button variant="contained" style={{"margin":5}} color={this.state.show_cases ? "primary" : "default"} onClick={(e) => this.handleToggle("toggle-cases")}>Total cases</Button>
                    <Button variant="contained" style={{"margin":5}} color={this.state.show_hospital ? "primary" : "default"}onClick={(e) => this.handleToggle("toggle-hospital")}>All hospitalizations</Button>
                    <Button variant="contained" style={{"margin":5}} color={this.state.show_critical ? "primary" : "default"} onClick={(e) => this.handleToggle("toggle-critical")}>Critical hospitalizations</Button>
                    <Button variant="contained" style={{"margin":5}} color={this.state.show_deaths ? "primary" : "default"} onClick={(e) => this.handleToggle("toggle-deaths")}>Total deaths</Button>
                    <Button variant="contained" style={{"margin":5}} color={this.state.show_rate ? "primary" : "default"} onClick={(e) => this.handleToggle("toggle-rate")}>Reproduction rate</Button>
                    <Button variant="contained" style={{"margin":5, "marginLeft":20}} color="secondary" onClick={(e) => this.handleToggle("toggle-ci")}>{this.state.show_ci ? 'HIDE CONFIDENCE INTERVALS' : 'SHOW CONFIDENCE INTERVALS'}</Button>
                </Toggler>
                <div id="chart"></div>

            </div>
        )
    }
}

export default ChartComponent