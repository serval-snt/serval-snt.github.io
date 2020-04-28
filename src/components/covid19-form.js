import React from "react"
import PropTypes from 'prop-types';

import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";

import API from './api';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 12,
      },
    fabDelete: {
        margin: theme.spacing.unit,
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 20,
      },
      fabDone: {
          margin: theme.spacing.unit,
          position: 'fixed',
          bottom: theme.spacing.unit * 2,
          right: theme.spacing.unit * 2,
        },
      
    });


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
    { key: "date", name: "Date", editable: true },
    { key: "value", name: "Value", editable: true }
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
        death_path:""
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
        if (this.state.selectedIndexes.indexOf(i)==-1){
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



  handleSubmit = () => {

    var measures = this.state.rows.map(e => e.measure)
    var dates = this.state.rows.map(e => e.date)
    var values = this.state.rows.map(e => parseInt(e.value)-100)

    API.post(`predict/`, { data: {country_name:this.state.countryName,measures:measures,dates:dates,values:values} })
    .then(res => {
        this.setState({
            reproduction_path:API.baseURL+"sims/rate/"+ res.path,
            case_path:API.baseURL+"sims/case/"+ res.path,
            hospital_path:API.baseURL+"sims/hospital/"+ res.path,
            critical_path:API.baseURL+"sims/critical/"+ res.path,
            death_path:API.baseURL+"sims/death/"+ res.path,
        })
    })
  }
  render() {
    const { classes } = this.props;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Country:  
                <select>
                {countries.map((c) => (
                    <option value="{{c}}">{c}</option>
                ))}

                </select>
                <br/><br/>
                
                </label>

                <label>Measures selection:
                <div>
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
                </div>
                </label>

                

            </form>
            <Fab color="secondary" aria-label="Next" className={classes.fabDone} onClick={this.handleSubmit}>
            <DoneIcon />
            </Fab>

            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleNewMeasureClick}>
            <AddIcon />
            </Fab>

            <Fab aria-label="Delete" className={classes.fabDelete} onClick={this.handleDeleteMeasureClick}>
            <DeleteIcon  />
            </Fab>


            {this.state.reproduction_path !="" &&<img src={this.state.reproduction_path} alt=""/>}
            {this.state.case_path !="" &&<img src={this.state.case_path} alt=""/>}
            {this.state.hospital_path !="" &&<img src={this.state.hospital_path} alt=""/>}
            {this.state.critical_path !="" &&<img src={this.state.critical_path} alt=""/>}
            {this.state.death_path !="" &&<img src={this.state.death_path} alt=""/>}
      
      </div>
    )
  }
}

Covid19Form.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  const Covid19Component = withStyles(styles)(Covid19Form);
  
  export default Covid19Component