import axios from "axios";

// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
};

// set the token and user from the session storage
export const setUserSession = (token) => {
  sessionStorage.setItem("token", token);
};

export const getUserProfile = () => {
  return axios
    .get("https://evening-mesa-59655.herokuapp.com/api/me", {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMedicalExpert = (searchString) => {
  let api;
  if (searchString === "") {
    api = "https://evening-mesa-59655.herokuapp.com/api/medical-experts";
  } else {
    api =
      "https://evening-mesa-59655.herokuapp.com/api/medical-experts?state=" +
      searchString;
  }
  return axios
    .get(api)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
