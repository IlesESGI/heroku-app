import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};

export default {
  login: function(email, password) {
    return axios.post(
      `/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  signup: function(send) {
    return axios.post(`/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};
