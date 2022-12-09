import axios from "axios";

export default axios.create({
  baseURL: "http://10.4.20.82:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});