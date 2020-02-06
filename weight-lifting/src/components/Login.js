import React, {Component} from 'react';

const Login = (props) => {
  const [credentials, setCredentials] = React.usestate({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
 };
 const Validation = () => {
   return credentials.username.length > 0 && credentials.password.length > 0;
 };
      return (
        <div>
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange}
              value={credentials.username}
              ></input>

              <input
                required
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={credentials.password}
              ></input>

          <button disabled = {!Validation()} type = "submit"  >Log in</button>
            </form>
            </div>


      )};
export default Login;

























// import React from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import Copyright from "./Reusable-Components/Copyright";
// import Styling from "./Reusable-Components/Styling";





// export default function Login() {
//   const classes = Styling();
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <AccountBoxIcon fontSize="Large" />
//         <Typography component="h2" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} Validate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Login
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/register" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }