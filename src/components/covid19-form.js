import React from "react"

import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";

const { DropDownEditor } = Editors;
const measureTypes = [
  { id: "S1_School closing", value: "School & Universities" },
  { id: "S7_International travel controls", value: "International travels" },
  { id: "parks", value: "Parks & Open air activities" },
  { id: "grocery/pharmacy", value: "Essential groceries" },
  { id: "transit_stations", value: "Public transport" },
  { id: "retail/recreation", value: "Retails & Recreation" },
  { id: "workplace", value: "Workplaces" }
];

const measureTypeEditor = <DropDownEditor options={measureTypes} />;
const countries = ["Afghanistan", "Angola", "Argentina", "Australia", "Austria", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bolivia", "Botswana", "Brazil", "Bulgaria", "Burkina Faso", "Cambodia", "Cameroon", "Canada", "Chile", "Colombia", "Costa Rica", "Croatia", "Denmark", "Dominican Republic", "Ecuador", "El Salvador", "Estonia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Haiti", "Honduras", "Hungary", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Latvia", "Lebanon", "Libya", "Lithuania", "Luxembourg", "Malaysia", "Mali", "Malta", "Mauritius", "Mexico", "Moldova", "Mongolia", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Rwanda", "Saudi Arabia", "Senegal", "Singapore", "Slovenia", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Togo", "Turkey", "Uganda", "United Arab Emirates", "United Kingdom", "Uruguay", "Vietnam", "Zambia", "Zimbabwe"]
  
const columns = [
    { key: "measure", name: "Measure", editor: measureTypeEditor },
    { key: "date", name: "Date" },
    { key: "value", name: "Value" }
  ];


export default class Covid19Form extends React.Component {
  

  state = {
    countryName: "Luxembourg",
    rows: []
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
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


  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select>
        {countries.map(({ c }) => (
            <option value="{{c}}">{c}</option>
        ))}
        </select>

        <div>
            <ReactDataGrid
            columns={columns}
            rowGetter={i => this.state.rows[i]}
            rowsCount={3}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    )
  }
}