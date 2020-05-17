import axios from 'axios';

let LOCAL_URL = `http://localhost:8080/`
let REMOTE_URL = `https://myphd-243415.ew.r.appspot.com/`

let baseUrl = LOCAL_URL//REMOTE_URL
export default axios.create({
  baseURL:baseUrl
});