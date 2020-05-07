import React from "react"
import PropTypes from 'prop-types';
import styled from "@emotion/styled"

import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";
import GridDatePicker from "./griddatepicker"
import GridRangeValues from "./gridrangevalue"

import API from './api';
import Chart from "./chart"

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';
import Menu from '@material-ui/core/Menu';

const scenarios = {
  "scenario-1": {
    "country" : "Luxembourg",
    "mitigations": [
        {id:0, measure:"grocery/pharmacy",date:"2020-05-11",value:100},
        {id:1, measure:"Workplaces",date:"2020-05-11",value:40},
        {id:2, measure:"Workplaces",date:"2020-05-25",value:100},
        {id:3, measure:"S1_School",date:"2020-05-11",value:40},
        {id:4, measure:"S1_School",date:"2020-05-18",value:70},
        {id:5, measure:"S1_School",date:"2020-05-25",value:100},
        {id:6, measure:"parks",date:"2020-05-11",value:20},
        {id:7, measure:"parks",date:"2020-05-25",value:40},
        {id:8, measure:"parks",date:"2020-06-04",value:100},
        {id:9, measure:"transit_stations",date:"2020-05-18",value:40},
        {id:10, measure:"retail/recreation",date:"2020-05-25",value:100},
        {id:11, measure:"S7_International travel controls",date:"2020-06-15",value:100}
    ]
  },
  "scenario-2": {
    "country" : "Luxembourg",
    "mitigations": [
      {id:0, measure:"grocery/pharmacy",date:"2020-05-11",value:100},
      {id:1, measure:"Workplaces",date:"2020-05-11",value:100},
      {id:2, measure:"S1_School",date:"2020-05-11",value:100},
      {id:3, measure:"parks",date:"2020-05-11",value:100},
      {id:4, measure:"transit_stations",date:"2020-05-11",value:100},
      {id:5, measure:"retail/recreation",date:"2020-05-11",value:100},
      {id:6, measure:"S7_International travel controls",date:"2020-05-11",value:100},
    ]
  }
}

const styles = () => ({
  left: {
    flexGrow: 1
  }
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
        loading:false,
        menuAnchorEl: null,
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

  handleLoadMenuOpen = (event) => {
    const id = event.currentTarget.id;
    this.setState(() => ({ menuAnchorEl: document.getElementById(id)}));
  };

  handleMenuClose = () => {
    this.setState(() => ({menuAnchorEl: null}));
  };

  isLoadMenuOpen = () => {
    return this.state.menuAnchorEl != null;
  }

  handleScenarioClick = (event) => {
    console.log(event.currentTarget.id)
    const scenario = scenarios[event.currentTarget.id]
    console.log(scenario)

    this.setState(() => ({
      countryName : scenario.country,
      rows : scenario.mitigations
    }));

    this.handleMenuClose();
  }

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

  renderLoadMenu = () => { 
    return(
      <Menu
        anchorEl={this.state.menuAnchorEl} 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="load-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.isLoadMenuOpen()}
        onClose={this.handleMenuClose}
      >
        <MenuItem id="scenario-1" onClick={this.handleScenarioClick}>
          <p>LU - Soft</p>
        </MenuItem>
        <MenuItem id="scenario-2" onClick={this.handleScenarioClick}>
          <p>LU - Brutal</p>
        </MenuItem>
      </Menu>
    )
  }

  render() {
    const { classes } = this.props;
    return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderAuthors>By Serval & Trux research groups @ SnT, University of Luxembourg</HeaderAuthors>
          </Grid>
            <Grid item xs={4}>

                <AppBar position="static">
                  <Toolbar variant="dense">
                    <div className={classes.left}>
                      <IconButton edge="start" className={classes.menuButton} onClick={this.handleNewMeasureClick} color="inherit" aria-label="add">
                        <AddCircleRoundedIcon />
                      </IconButton>
                      <IconButton edge="start" className={classes.menuButton} onClick={this.handleDeleteMeasureClick} color="inherit" aria-label="remove">
                        <RemoveCircleIcon />
                      </IconButton>    
                        <IconButton edge="start" id="load-button" className={classes.menuButton} onClick={this.handleLoadMenuOpen} color="inherit" aria-label="load" aria-haspopup="true">
                          <CloudDownloadRoundedIcon />
                        </IconButton>                     
                    </div>
                    <IconButton className={classes.menuButton} onClick={this.handleSubmit} color="inherit" aria-label="play">
                      <PlayCircleFilledWhiteIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                {this.renderLoadMenu()}

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