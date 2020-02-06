
import React, {Component} from "react";
import styled from 'styled-components';

const Signuptitle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-right:25%;
margin-left:25%;
margin-top: 15%;
width:50%;
background-color: #07575B;
padding-bottom:5%;
`;

// const Submitbutton = styled.button`
// display:flex;
// width:40%;
// margin-left:30%;
// margin-right:30%;
// margin-top:5%;
// `;

const Title = styled.h2`
color: #C4DFE6;
`;

const Headertitle = styled.h1`
color: #66A5AD;
`

const RegisterForm = (props) => {
  const [credentials, setCredentials] = React.useState({ 
    username:'',
    password:''
  });
 const handleSubmit = event => {
    event.preventDefault();
   console.log(credentials);
    
    }
    
    const Validation = () => {
      return credentials.username.length > 0 && credentials.password.length > 0;
    
    }

const handleChanges = event => {
    setCredentials({...credentials, [event.target.name]: event.target.value})
  
}
return (

  
  <Signuptitle> 
      <div>
<Headertitle>Weight Lifting Journal</Headertitle>
    </div>
    <div>
       <Title>Sign Up</Title>
          </div>
         
      <form onSubmit={handleSubmit}>
      <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChanges}
           />
            
            </div>
              <div>
              <input
              type="text"
              name="password"
              placeholder="password"
              value={credentials.password}
              onChange={handleChanges}
              />
          
            </div>
      <div>
            <button disabled={!Validation()}  type="submit">Sign Up</button>
      </div>
        </form>
</Signuptitle>
);

};
   


export default RegisterForm;

// const FormikRegisterForm = withFormik({
//       validationSchema: yup.object().shape({
//      // username: yup.string().required('Username Required'),
//     // password: yup.string().min(6, 'Password needs to be at least 6 characters long').required('Password Required')
//       })
//     })(RegisterForm)
  
    









// import React, {useState} from "react";
// import {withFormik, Form, Field} from 'formik';
// import * as yup from 'yup';
// import styled from 'styled-components';

// const Signuptitle = styled.div`
// display:flex;
// flex-direction:column;
// align-items:center;
// margin-right:25%;
// margin-left:25%;
// margin-top: 15%;
// width:50%;
// background-color: #07575B;
// padding-bottom:5%;
// `;

// const Submitbutton = styled.button`
// display:flex;
// width:40%;
// margin-left:30%;
// margin-right:30%;
// margin-top:5%;
// `;

// const Title = styled.h2`
// color: #C4DFE6;
// `;

// const Headertitle = styled.h1`
// color: #66A5AD;
// `

// const RegisterForm = ({values, errors, touched, status}) => {
//   const [userState, setUserState] = useState({ 
//     username:'',
//     password:''
//   });
//  const handleSubmit = event => {
//     event.preventDefault();
   
    
//     }
// const handleChanges = event => {
//     setUserState({...userState, [event.target.name]: event.target.value})
  
// }
// return (

  
//   <Signuptitle> 
//       <div>
// <Headertitle>Weight Lifting Journal</Headertitle>
//     </div>
//     <div>
//        <Title>Sign Up</Title>
//           </div>
         
//       <Form onSubmit={handleSubmit}>
//       <div>
//           <Field
//             type="text"
//             name="username"
//             placeholder="username"
//             value={userState.username}
//             onChange={handleChanges}
//            />
//             {touched.username && errors.username ? <p>{errors.username}</p> :null}
//             </div>
//               <div>
//               <Field
//               type="password"
//               name="password"
//               placeholder="password"
//               value={userState.password}
//               onChange={handleChanges}
//               />
//             {touched.password && errors.password ? <p>{errors.password}</p> :null}
//             </div>
//       <div>
//             <Submitbutton disable={!Validation()} type="submit">Sign Up</Submitbutton>
//       </div>
//         </Form>
// </Signuptitle>
// );
// };
   
// const Validation = () => {
//   return(UserState.username.length > 0 && UserState.password.length > 0)

// }

// export default FormikRegisterForm;

// // const FormikRegisterForm = withFormik({
// //       validationSchema: yup.object().shape({
// //      // username: yup.string().required('Username Required'),
// //     // password: yup.string().min(6, 'Password needs to be at least 6 characters long').required('Password Required')
// //       })
// //     })(RegisterForm)
  
    
