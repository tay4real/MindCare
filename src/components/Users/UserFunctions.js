import axios from "axios";

export const register = (newUser) =>
  axios
    .post(`https://evening-mesa-59655.herokuapp.com/api/register`, newUser, {})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

export const login = (user) => {
  return axios
    .post(
      `https://evening-mesa-59655.herokuapp.com/api/login`,
      {
        email: user.email,
        password: user.password,
      },
      {
        headers: { "Content-type": "application/json" },
      }
    )
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = () => {
  axios
    .get("https://evening-mesa-59655.herokuapp.com/api/profile", {
      headers: { Authorization: `Bearer Token ${localStorage.usertoken}` },
    })
    .then((res) => {
      return res.data.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
