import axios from 'axios';

let LOCAL_URL = `http://localhost:8080/`
let REMOTE_URL = `https://cors-anywhere.herokuapp.com/https://myphd-243415.ew.r.appspot.com/`

let baseUrl = REMOTE_URL
export default axios.create({
  baseURL:baseUrl
});