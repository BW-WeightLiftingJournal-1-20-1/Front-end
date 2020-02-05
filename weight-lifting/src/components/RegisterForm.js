import React, {useState} from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Signuptitle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-right:15%;
margin-left:15%;
margin-top: 15%;
width:70%;
background-color: #07575B;
padding-bottom:5%;
`;

const Submitbutton = styled.button`
display:flex;
width:40%;
margin-left:30%;
margin-right:30%;
margin-top:5%;
`;

const Title = styled.h2`
color: #C4DFE6;
`;

const Headertitle = styled.h1`
color: #66A5AD;
`





const RegisterForm = ({values, errors, touched, status}) => {
  const [userState, setUserState] = useState({ 
    username:'',
    password:''
  });
 const handleSubmit = event => {
    event.preventDefault();
    
    }
const handleChanges = event => {
    setUserState({...userState, [event.target.name]: event.target.value})
  
}
return (

  
  <Signuptitle>
      <div>
<Headertitle>Weight Lifting Journal</Headertitle>
    </div>
    <div>
       <Title>Sign Up</Title>
          </div>
         
      <Form onSubmit={handleSubmit}>
      <div>
          <Field
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChanges}
           />
            {touched.username && errors.username && (<p>{errors.username}</p>)}
            </div>
              <div>
              <Field
              type="password"
              name="password"
              placeholder="password"
             
              onChange={handleChanges}
              />
            {touched.password && errors.password && (<p>{errors.password}</p>) }
            </div>
      <div>
            <Submitbutton type="submit">Sign Up</Submitbutton>
      </div>
        </Form>
</Signuptitle>
);
};
    const FormikRegisterForm = withFormik({
      validationSchema: Yup.object().shape({
        username: Yup.string().required('Username Required'),
        password: Yup.string().min(6, 'Password needs to be at least 6 characters long').required('Password Required')
      })
    })(RegisterForm)
  
    
export default FormikRegisterForm;