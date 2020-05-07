import React from "react"
import PropTypes from 'prop-types';
import styled from "@emotion/styled"

import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";
import GridDatePicker from "./griddatepicker"
import GridRangeValues from "./gridrangevalue"

import API from './api';
import Chart from "./chart"

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    fab: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(12),
      },
    fabDelete: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(20),
      },
      fabDone: {
          margin: theme.spacing(1),
          position: 'fixed',
          bottom: theme.spacing(2),
          left: theme.spacing(2),
        },
      
    });

const HeaderAuthors = styled.h3`
  margin-top: 10px;
  color: #606060;
`

const { DropDownEditor } = Editors;
const measureTypes = [
  { id: "S1_School closing", value: "School & Universities" },
  { id: "S7_International travel controls", value: "International travels" },
  { id: "parks", value: "Parks & outdoor activities" },
  { id: "grocery/pharmacy", value: "Essential groceries" },
  { id: "transit_stations", value: "Public transport" },
  { id: "retail/recreation", value: "Retail & Recreation" },
  { id: "workplace", value: "Workplaces" }
];

const measureTypeEditor = <DropDownEditor options={measureTypes} />;
const countries = ["Afghanistan", "Angola", "Argentina", "Australia", "Austria", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bolivia", "Botswana", "Brazil", "Bulgaria", "Burkina Faso", "Cambodia", "Cameroon", "Canada", "Chile", "Colombia", "Costa Rica", "Croatia", "Denmark", "Dominican Republic", "Ecuador", "El Salvador", "Estonia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Haiti", "Honduras", "Hungary", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Latvia", "Lebanon", "Libya", "Lithuania", "Luxembourg", "Malaysia", "Mali", "Malta", "Mauritius", "Mexico", "Moldova", "Mongolia", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Rwanda", "Saudi Arabia", "Senegal", "Singapore", "Slovenia", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Togo", "Turkey", "Uganda", "United Arab Emirates", "United Kingdom", "Uruguay", "Vietnam", "Zambia", "Zimbabwe"]
  
const columns = [
    { key: "measure", name: "Measure", editor: measureTypeEditor },
    { key: "date", name: "Date", editable: true, editor: <GridDatePicker /> },
    { key: "value", name: "Value", editable: true, editor: <GridRangeValues min={0} max={100} /> }
  ];


class Covid19Form extends React.Component {
  
constructor(props) {
    super(props);
        this.state = {
        countryName: "Luxembourg",
        rows: [],
        selectedIndexes: [],
        increment:0,
        reproduction_path:"",
        case_path:"",
        hospital_path:"",
        critical_path:"",
        death_path:"",
        data_json:"",
        loading:false
    }
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleNewMeasureClick = () => {
    this.setState(previousState => ({
        rows: [...previousState.rows, {id:previousState.increment, measure:"Workplaces",date:"2020-05-11",value:100}],
        increment: previousState.increment +1 
    }));

  };

  handleDeleteMeasureClick = () => {

    var new_rows = []
    for(var i=0;i<this.state.rows.length;i++){
        if (this.state.selectedIndexes.indexOf(i) === -1){
            new_rows.push(this.state.rows[i])
        }
    }
    this.setState(previousState => ({
        rows: new_rows,
        selectedIndexes:[]
    }));

  };


  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  onRowsSelected = rows => {
    var selectedIdx =  rows.map(r => r.rowIdx)
    this.setState({
    selectedIndexes: this.state.selectedIndexes.concat(selectedIdx)
    });
  };

  onRowsDeselected = rows => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
      )
    });
  };

  changeName = (event) => {
     this.setState({countryName: event.target.value});
  }

  handleSubmit = () => {

    var measureTypes_id = measureTypes.map(e => e.id)
    var measureTypes_values = measureTypes.map(e => e.value)

    var measures = this.state.rows.map(e => measureTypes_id[measureTypes_values.indexOf(e.measure)])
    var dates = this.state.rows.map(e => e.date)
    var values = this.state.rows.map(e => parseInt(e.value)-100)

    this.setState({
            reproduction_path:"",
            case_path:"",
            hospital_path:"",
            critical_path:"",
            death_path:"",
            loading:true
        })

    API.post(`predict`, { country_name:this.state.countryName,measures:measures,dates:dates,values:values} )
    .then(res => {
        var df = res.data.df
        df.forEach(entry => entry.Date = new Date(entry.Date));
        this.setState({
            data_json:df,
            loading:false
        })
        console.log(res.data.path,this.state)
    })
  }
  render() {
    const { classes } = this.props;
    return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderAuthors>By Serval & Trux research groups @ SnT, University of Luxembourg</HeaderAuthors>
          </Grid>
            <Grid item xs={4}>
                <FormControl onSubmit={this.handleSubmit} fullWidth={true}>
                    <InputLabel>Country</InputLabel>
                    <Select 
                      onChange={this.changeName} 
                      value={this.state.countryName}
                    >
                    {countries.map((c) => (
                      <MenuItem value={c}>{c}</MenuItem>
                    ))}
                    </Select>
                    <FormHelperText>Select a country to run your simulation in</FormHelperText>
                    <br/>
                    <ReactDataGrid
                    columns={columns}
                    rowKey="id"
                    rowGetter={i => this.state.rows[i]}
                    rowsCount={this.state.rows.length}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                    rowSelection={{
                        showCheckbox: true,
                        onRowsSelected: this.onRowsSelected,
                        onRowsDeselected: this.onRowsDeselected,
                        selectBy: {
                            indexes: this.state.selectedIndexes
                        }
                    }}
                    enableCellSelect={true}
                    />
                </FormControl>

                <Fab color="secondary" aria-label="Next" style={{zIndex:1000}} className={classes.fabDone} onClick={this.handleSubmit}>
                <DoneIcon />
                </Fab>

                <Fab color="primary" aria-label="Add" style={{zIndex:1000}} className={classes.fab} onClick={this.handleNewMeasureClick}>
                <AddIcon />
                </Fab>

                <Fab aria-label="Delete" style={{zIndex:1000}} className={classes.fabDelete} onClick={this.handleDeleteMeasureClick}>
                <DeleteIcon  />
                </Fab>
            </Grid>
            <Grid item xs={8}>
                {this.state.loading &&
                <div
                 style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Loader type="ThreeDots" color="#54257c" height="100" width="100" />
                </div>
                }
                {this.state.data_json && <Chart data={this.state.data_json} />}
                {this.state.reproduction_path !== "" &&<img src={this.state.reproduction_path} alt=""/>}
                {this.state.case_path !== "" &&<img src={this.state.case_path} alt=""/>}
                {this.state.hospital_path !== "" &&<img src={this.state.hospital_path} alt=""/>}
                {this.state.critical_path !== "" &&<img src={this.state.critical_path} alt=""/>}
                {this.state.death_path !== "" &&<img src={this.state.death_path} alt=""/>}
            </Grid>
      </Grid>
    )
  }
}

Covid19Form.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  const Covid19Component = withStyles(styles)(Covid19Form);
  
  export default Covid19Component