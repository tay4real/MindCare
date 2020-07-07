import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const styles = {
  errorMessage: {
    color: "red",
    fontSize: "0.75em",
    display: "relative",
  },
};

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class Register extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "User",
      email: "",
      phone_number: "",
      dob: "",
      states: [],
      lgas: [],
      state: "",
      lga: "",
      password: "",
      re_password: "",
      errors: [],
      success: false,
      displayErrors: false,
      formErrors: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
        address: "",
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;

    const url = "https://evening-mesa-59655.herokuapp.com/api/states";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      states: data.data,
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  async componentDidUpdate() {
    const { state } = this.state;

    if (state !== "") {
      const url =
        "https://evening-mesa-59655.herokuapp.com/api/states/" +
        state +
        "/lgas";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        lgas: data.data,
      });
    }
  }
  onChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "first_name":
        formErrors.first_name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "last_name":
        formErrors.last_name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      case "re_password":
        formErrors.re_password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (formValid(this.state)) {
      let fname;
      if (this.state.first_name === "") {
        fname = "Anonymous User";
      } else {
        fname = this.state.first_name;
      }

      const newUser = {
        name: fname,
        email: this.state.email,
        password: this.state.password,
        re_password: this.state.re_password,
        phone_number: this.state.phone_number,
        dob: this.state.dob,
        state: this.state.state,
        lga: this.state.lga,
        address: this.state.address,
      };

      axios
        .post("https://evening-mesa-59655.herokuapp.com/api/register", newUser)
        .then((newUser) => {
          this.setState({
            success: true,
            displayErrors: false,
          });
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data.errors);
            this.setState({
              errors: err.response.data.errors,
              displayErrors: true,
              success: false,
            });
          }
        });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }

  renderError(message) {
    if (!message) return null;
    else {
      return (
        <div>
          {Object.keys(message).map((field) => (
            <div
              key={field}
              className="p-3 mb-2 bg-danger text-white text-white text-center"
              style={{ display: "block" }}
            >
              {message[field].map((error) => (
                <div key={field} style={{ textTransform: "capitalize" }}>
                  {error}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    const { states } = this.state;
    let stateList;
    if (states !== undefined) {
      stateList = states.map((state) => {
        const { id, name } = state;
        return (
          <option key={id} value={id}>
            {name}
          </option>
        );
      });
    }
    const { lgas } = this.state;
    let lgaList;
    if (lgas !== undefined) {
      lgaList = lgas.map((lga) => {
        const { id, name } = lga;
        return (
          <option key={id} value={id}>
            {name}
          </option>
        );
      });
    }
    const { formErrors } = this.state;
    const { email } = this.state;

    return (
      <div
        id="register"
        className="container"
        style={{ padding: "100px 16px" }}
      >
        <div className="row card">
          <div
            className=".col-6	.col-sm-6	.col-lg-6	.col-xl-6 col-md-8 mt-5 mb-5 mx-auto"
            style={{ display: this.state.success ? "block" : "none" }}
          >
            <div className="card-header bg-transparent border-primary">
              <h5>
                Thank you for registering on our platform. An email has been
                sent to you. Please verify your email to complete your
                registration.
              </h5>
            </div>
          </div>
          <div
            className=".col-6	.col-sm-6	.col-lg-6	.col-xl-6 col-md-8 mt-5 mb-5 mx-auto"
            style={{ display: this.state.success ? "none" : "block" }}
          >
            <div className=" bg-transparent border-primary">
              <h1 className="h3  text-center mb-3 font-weight-normal">
                Register
              </h1>

              {this.state.displayErrors
                ? this.renderError(this.state.errors)
                : ""}
            </div>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="first_name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="Enter Your Name (Optional)"
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                  {formErrors.first_name.length > 0 && (
                    <span style={styles.errorMessage}>
                      {formErrors.first_name}
                    </span>
                  )}
                </div>

                <div className="form-group" style={{ display: "none" }}>
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Enter Last Name (Optional)"
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                  {formErrors.last_name.length > 0 && (
                    <span style={styles.errorMessage}>
                      {formErrors.last_name}
                    </span>
                  )}
                </div>

                <div className="form-group hide" style={{ display: "none" }}>
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    placeholder="Enter Date of Birth"
                    value={this.state.dob}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group hide" style={{ display: "none" }}>
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone_number"
                    placeholder="Enter Phone Number"
                    value={this.state.phone_number}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span style={styles.errorMessage}>{formErrors.email}</span>
                  )}
                </div>

                <div className="form-group" style={{ display: "none" }}>
                  <label htmlFor="email">Address</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter your Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <div className="form-group" style={{ display: "none" }}>
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select"
                    onChange={this.onChange}
                    name="state"
                  >
                    <option>Choose your State</option>
                    {stateList}
                  </select>
                </div>
                <div className="form-group" style={{ display: "none" }}>
                  <label htmlFor="state">LGA</label>
                  <select
                    className="custom-select"
                    onChange={this.onChange}
                    name="lga"
                  >
                    <option>Choose your LGA</option>
                    {lgaList}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span style={styles.errorMessage}>
                      {formErrors.password}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="re_password">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="re_password"
                    placeholder="Re-Enter Password"
                    autoComplete="off"
                    value={this.state.re_password}
                    onChange={this.onChange}
                  />
                  {formErrors.re_password.length > 0 && (
                    <span style={styles.errorMessage}>
                      {formErrors.re_password}
                    </span>
                  )}
                </div>
              </div>
              <div className=" bg-transparent border-primary">
                {email.length > 0 ? (
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register
                  </button>
                )}
              </div>
            </form>
            <div className="col-sm text-center pt-2">
              <Link to="/signin">Already have an account? Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
