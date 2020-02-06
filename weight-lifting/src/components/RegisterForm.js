
import React, {Component} from "react";
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Signupform = styled.form`
display:flex;
flex-direction:column;
align-items:center;
border-radius:30px;
margin-right:32%;
margin-left:32%;
margin-top: 10%;
width:35%;
background-color: #00A35E;
padding-bottom:5%;
padding-top: 2%;
`;

const Title = styled.h2`
color: #C4DFE6;
padding-bottom:20%;
`;

const Inputone = styled.input`
margin-bottom:5%;
`;

const Inputtwo = styled.input`
margin-bottom:10%;
`;

const Signupbutton = styled.button`
width: 100%

`;

const Topnav = styled.nav`
display:flex;
justify-content:flex-end;
justify-content:space-between;
padding-bottom:10px;
padding-top:10px;
width 100%;
align-items:center;
background-color: #00A35E;
`;

const Anchorstyle = styled.a`
padding-right:5%;
color: white;

`;
const Headertext = styled.h1`
color: white;
padding-left:5%;
`;
const Footerstyle= styled.footer`
display:flex;
justify-content:center;
background-color:black;
width 100%;
padding-top:10px;
padding-bottom:10px;
margin-top 12%;

`;

const Copyright = styled.p`
color:white;
`;
const Lambdateam = styled.span`
color:green;
`;

const RegisterForm = (props) => {
  const [credentials, setCredentials] = React.useState({ 
    username:'',
    password:''
  });
 
  const handleSubmit = event => {
    event.preventDefault();
    props.history.push('/Login')
    console.log(credentials);
    
    axiosWithAuth()
    .post(`/api/auth/register`, credentials)
    .then(response => {
      console.log(response.data);
    })
   .catch (error => console.log(error));
    
  }
    
    
    const handleChanges = event => {
      setCredentials({...credentials, [event.target.name]: event.target.value})
    
  }
    
    const Validation = () => {
      return credentials.username.length > 0 && credentials.password.length > 0;
    
    }

return (
  
<div> 
  <Topnav >
     <Headertext>Weightlifting Journal</Headertext>
        <Anchorstyle>Dashboard</Anchorstyle>
        <Anchorstyle>Login</Anchorstyle>
        <Anchorstyle>Add Exercise</Anchorstyle>
        <Anchorstyle>Saved Exercises</Anchorstyle>
  </Topnav >
         
    <Signupform onSubmit={handleSubmit}>
        <div>
        <Title>Sign Up</Title>
        </div>
      <div>
          <Inputone
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChanges}
           />
            
            </div>
              <div>
              <Inputtwo
              type="text"
              name="password"
              placeholder="password"
              value={credentials.password}
              onChange={handleChanges}
              />
          
            </div>
      <div>
            <Signupbutton disabled={!Validation()}  type="submit">Sign Up</Signupbutton>
      </div>
        </Signupform>
        <Footerstyle>
          <Copyright>Copyright 2019 <Lambdateam>Lamba Team</Lambdateam></Copyright>
        </Footerstyle>
</div>
);

};
export default RegisterForm;

