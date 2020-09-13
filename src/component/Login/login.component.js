import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsername: "",
      dataPassword: "",
      errUsername: "",
      errPassword: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {dataPassword,dataUsername}=this.state;
    let valid=true;
    if(dataUsername===""){
      this.setState({
        errUsername:"User name should not empty"
      })
      valid=false;
    }
    if(dataPassword===""){
      this.setState({
        errPassword:"Password should not empty"
      })
      valid=false
    }
    if(valid){
      console.log(dataUsername);
      console.log(dataPassword);
    this.setState({
      dataUsername:"",
      dataPassword:"",
      errUsername:"",
      errPassword:"",
    })
  }
  };
  handleChange = (e) => {
    // console.log(e.target.value, e.target.name);
    if (e.target.name ==="username") {
      this.setState({
        dataUsername: e.target.value,
        errUsername:""
      });
    }else if(e.target.name==="password"){
      this.setState({
        dataPassword:e.target.value,
        errPassword:""
      })
    }
  };
  render() {
    const { dataUsername, dataPassword,errUsername,errPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className={errUsername==="" ? "form-control":"form-control is-invalid"}
            value={dataUsername}
            name="username"
            onChange={this.handleChange}
          ></input>
          <span className="invalid-feedback">{errUsername}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={errPassword==="" ? "form-control":"form-control is-invalid"}
            value={dataPassword}
            name="password"
            onChange={this.handleChange}
          ></input>
          <span className="invalid-feedback">{errPassword}</span>
        </div>

        <button className="btn btn-primary btn-block btn-lg">Login</button>
      </form>
    );
  }
}

export default Login;
