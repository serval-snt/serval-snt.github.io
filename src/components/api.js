import axios from 'axios';

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/http://35.241.156.147:8080/`
});