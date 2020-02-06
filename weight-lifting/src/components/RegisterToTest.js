import { axiosWithAuth } from '../utils/axiosWithAuth';
import React from 'react';
import { connect } from "react-redux"
import { userRegister } from "../actions";
 
const RegisterToTest = (props) => {
  const [registerCredentials, setRegisterCredentials] = React.useState({
    username: "",
    password: ""
  });
 
  const handleChange = e => {
    setRegisterCredentials({
      ...registerCredentials,
      [e.target.name]: e.target.value
    });
  };
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.history.push('/logintotest')
  //   console.log(registerCredentials)
  // }
 
  const handleValidate = () => {
    return registerCredentials.username.length > 0 && registerCredentials.password.length > 0
  }
  const handleSubmit = (e) =>  {
    e.preventDefault();
      props.history.push('/logintotest')
    axiosWithAuth()
      .post(`/api/auth/register`, registerCredentials)
      .then(res => {
          })
      .catch(err => console.log(err));
      console.log(registerCredentials)
  }
 
  return (
    <div>
      <h3>Registrer</h3>
      <form onSubmit={handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={registerCredentials.name} onChange={handleChange} />
        </div>
 
        <div className="FormField">
          <label className="FormField__Label" htmlFor="username">username</label>
          <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={registerCredentials.username} onChange={handleChange} />
        </div>
 
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={registerCredentials.password} onChange={handleChange} />
        </div>
        <div className="FormField">
          <button className="FormField__Button mr-20" disabled={!handleValidate()}>Sign Up</button>
        </div>
        <div className="FormField">
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, { userRegister })(RegisterToTest);
