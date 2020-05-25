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
import HelpIcon from '@material-ui/icons/Help';
import Menu from '@material-ui/core/Menu';
import InputTutorial from "./inputTutorial";

const scenarios = {
  "scenario-brutal-exit": {
    "mitigations": [
      //{id:0, measure:"Essential groceries",date:"2020-05-11",value:100},
      {id:1, measure:"Workplaces",date:"2020-05-11",value:100},
      //{id:2, measure:"School & Universities",date:"2020-05-11",value:100},
      {id:3, measure:"Parks & outdoor activities",date:"2020-05-11",value:100},
      {id:4, measure:"Public transport",date:"2020-05-11",value:100},
      {id:5, measure:"Retail & Recreation",date:"2020-05-11",value:100},
      //{id:6, measure:"International travels",date:"2020-05-11",value:100}
    ]
  },
  /*"scenario-brutal-exit-closed-borders": {
    "mitigations": [     
      {id:0, measure:"Essential groceries",date:"2020-05-11",value:100},
      {id:1, measure:"Workplaces",date:"2020-05-11",value:100},
      //{id:2, measure:"School & Universities",date:"2020-05-11",value:100},
      {id:3, measure:"Parks & outdoor activities",date:"2020-05-11",value:100},
      {id:4, measure:"Public transport",date:"2020-05-11",value:100},
      {id:5, measure:"Retail & Recreation",date:"2020-05-11",value:100},
      //{id:6, measure:"International travels",date:"2020-05-11",value:0}
    ]
  },*/
  "scenario-cyclic-exit": {
    "mitigations": [
      //{id:0, measure:"Essential groceries",date:"2020-05-11",value:100},
      {id:1, measure:"Workplaces",date:"2020-05-11",value:100},
      //{id:2, measure:"School & Universities",date:"2020-05-11",value:100},
      {id:3, measure:"Parks & outdoor activities",date:"2020-05-11",value:100},
      {id:4, measure:"Public transport",date:"2020-05-11",value:100},
      {id:5, measure:"Retail & Recreation",date:"2020-05-11",value:100},
      //{id:6, measure:"International travels",date:"2020-05-11",value:100},

      {id:7, measure:"Essential groceries",date:"2020-06-08",value:20},
      {id:8, measure:"Workplaces",date:"2020-06-08",value:20},
      //{id:9, measure:"School & Universities",date:"2020-06-08",value:0},
      {id:10, measure:"Parks & outdoor activities",date:"2020-06-08",value:0},
      {id:11, measure:"Public transport",date:"2020-06-08",value:0},
      {id:12, measure:"Retail & Recreation",date:"2020-06-08",value:0},
      //{id:13, measure:"International travels",date:"2020-06-08",value:0},

      //{id:14, measure:"Essential groceries",date:"2020-07-06",value:100},
      {id:15, measure:"Workplaces",date:"2020-07-06",value:100},
      //{id:16, measure:"School & Universities",date:"2020-07-06",value:100},
      {id:17, measure:"Parks & outdoor activities",date:"2020-07-06",value:100},
      {id:18, measure:"Public transport",date:"2020-07-06",value:100},
      {id:19, measure:"Retail & Recreation",date:"2020-07-06",value:100},
      //{id:20, measure:"International travels",date:"2020-07-06",value:100},

      //{id:21, measure:"Essential groceries",date:"2020-08-03",value:20},
      {id:22, measure:"Workplaces",date:"2020-08-03",value:20},
      //{id:23, measure:"School & Universities",date:"2020-08-03",value:0},
      {id:24, measure:"Parks & outdoor activities",date:"2020-08-03",value:0},
      {id:25, measure:"Public transport",date:"2020-08-03",value:0},
      {id:26, measure:"Retail & Recreation",date:"2020-08-03",value:0},
      //{id:27, measure:"International travels",date:"2020-08-03",value:0},

      //{id:28, measure:"Essential groceries",date:"2020-09-07",value:100},
      {id:29, measure:"Workplaces",date:"2020-09-07",value:100},
      //{id:30, measure:"School & Universities",date:"2020-09-07",value:100},
      {id:31, measure:"Parks & outdoor activities",date:"2020-09-07",value:100},
      {id:32, measure:"Public transport",date:"2020-09-07",value:100},
      {id:33, measure:"Retail & Recreation",date:"2020-09-07",value:100},
      //{id:34, measure:"International travels",date:"2020-09-07",value:100}
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
  //{ id: "S1_School closing", value: "School & Universities" },
  //{ id: "S7_International travel controls", value: "International travels" },
  { id: "parks", value: "Parks & outdoor activities" },
  //{ id: "grocery/pharmacy", value: "Essential groceries" },
  { id: "transit_stations", value: "Public transport" },
  { id: "retail/recreation", value: "Retail & Recreation" },
  { id: "workplace", value: "Workplaces" }
];

const measureTypeEditor = <DropDownEditor options={measureTypes} />;
const countries = ["Afghanistan", "Angola", "Argentina", "Austria", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Belize", "Benin", "Bolivia", "Botswana", "Brazil", "Bulgaria", "Burkina Faso", "Cameroon", "Chile", "Colombia", "Costa Rica", "Croatia", "Denmark", "Dominican Republic", "Ecuador", "El Salvador", "Estonia", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Honduras", "Hungary", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Lebanon", "Libya", "Luxembourg", "Malaysia", "Mali", "Mauritius", "Mexico", "Moldova", "Mongolia", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Singapore", "Slovenia", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Tanzania", "Thailand", "Turkey", "Uganda", "United Arab Emirates", "United Kingdom", "Uruguay", "Vietnam", "Zambia", "Zimbabwe"]
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
        rows: [
          {id:1, measure:"Workplaces",date:"2020-05-11",value:70},
          {id:3, measure:"Parks & outdoor activities",date:"2020-05-11",value:70},
          {id:4, measure:"Public transport",date:"2020-05-11",value:70},
        ],
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
        inputTutorial: false,
    }

    this.savedState = null;
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
    const scenario = scenarios[event.currentTarget.id]

    this.setState(() => ({
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

  handleHelpMeasure = () => {
    this.savedState = this.state;
    this.setState({inputTutorial: true});
  }

  callbackHelpMeasure = () => {
    this.setState({...this.savedState, inputTutorial: false});
    this.savedState = null;
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
            loading:true,
        })

    API.post(`predict`, { country_name:this.state.countryName,measures:measures,dates:dates,values:values} )
    .then(res => {
        var df = res.data.df

        var max_herd = Math.ceil(Math.max.apply(Math,df.map(function(o){return o.Herd_immunity;})))
        df.forEach(entry => entry.Date = new Date(entry.Date));
        df.forEach(entry => entry.MaxHerd_immunity = max_herd);

        this.setState({
            data_json:df,
            loading:false
        })
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
        <MenuItem id="scenario-brutal-exit" onClick={this.handleScenarioClick}>
          <p>Brutal Exit</p>
        </MenuItem>
        <MenuItem id="scenario-cyclic-exit" onClick={this.handleScenarioClick}>
          <p>Cyclic Exit</p>
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
            <InputTutorial run={this.state.inputTutorial} callback={this.callbackHelpMeasure} />
          </Grid>
            <Grid id="covid-form" item sm={12} lg={4}>
                <AppBar position="static">
                  <Toolbar variant="dense">
                    <div className={classes.left}>
                      <IconButton id="covid-add-measure" edge="start" className={classes.menuButton} onClick={this.handleNewMeasureClick} color="inherit" aria-label="add">
                        <AddCircleRoundedIcon />
                      </IconButton>
                      <IconButton id="covid-remove-measure" edge="start" className={classes.menuButton} onClick={this.handleDeleteMeasureClick} color="inherit" aria-label="remove">
                        <RemoveCircleIcon />
                      </IconButton>    
                      <IconButton id="covid-load-measure" edge="start" className={classes.menuButton} onClick={this.handleLoadMenuOpen} color="inherit" aria-label="load" aria-haspopup="true">
                        <CloudDownloadRoundedIcon />
                      </IconButton>                     
                    </div>
                    <IconButton id="covid-help-measure" className={classes.menuButton} onClick={this.handleHelpMeasure} color="inherit" aria-label="play">
                      <HelpIcon />
                    </IconButton>
                    <IconButton id="covid-compute-measure" className={classes.menuButton} onClick={this.handleSubmit} color="inherit" aria-label="play">
                      <PlayCircleFilledWhiteIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                {this.renderLoadMenu()}

                <FormControl onSubmit={this.handleSubmit} fullWidth={true}>
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
                    <Select
                      onChange={this.changeName} 
                      value={this.state.countryName}
                    >
                    {countries.map((c) => (
                      <MenuItem value={c}>{c}</MenuItem>
                    ))}
                    </Select>
                    <FormHelperText id="covid-country-selection">Select a country to run your simulation in</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item sm={12} lg={8}>
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
                {this.state.data_json && !this.state.loading && <Chart data={this.state.data_json} />}
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