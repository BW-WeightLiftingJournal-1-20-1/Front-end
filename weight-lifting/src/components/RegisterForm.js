import React, {useState} from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

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
  <div>
    <div>
       <h2>Sign Up</h2>
          </div>
      <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChanges}
           />
            {touched.username && errors.username && (<p>{errors.username}</p>)}
              <Field
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChanges}
              />
            {touched.password && errors.password && (<p>{errors.password}</p>) }
      <div>
            <button type="submit">Sign Up</button>
      </div>
        </Form>
        
               </div>
);
};

    const FormikRegisterForm = withFormik({
      validationSchema: Yup.object().shape({
        username: Yup.string().required('Username Required'),
        password: Yup.string().min(6, 'Password needs to be at least 6 characters long').required('Password Required')
      })
    })(RegisterForm)
  
    
export default FormikRegisterForm;