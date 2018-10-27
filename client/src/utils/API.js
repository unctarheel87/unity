import axios from "axios";

export default {
  auth: (user) => {
    console.log(user)
    return axios.post('/login', { user })
  }
};