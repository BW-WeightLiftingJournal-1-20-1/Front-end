import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import { axiosWithAuth } from "./utils/axiosWithAuth";
import Home from "./components/Home";

import RegisterForm from "./components/RegisterForm";
import RegisterToTest from "./components/RegisterToTest";

import Login from "./components/Login";
import LoginToTest from "./components/LoginToTest";

import ExerciseCard from "./components/ExerciseCard";
import UpdateExercise from "./components/UpdateExercise";
//import WorkoutCard from "./components/WorkoutCard";
//import UpdateWorkout from "./components/UpdateWorkout";


import './App.css';

function App() {
  const [dataExercise, setDataExercise] = useState([]);
  const [toGo, setToGo] = useState(false);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/users/id/exercises")
      .then(response => {
        console.log("response", response);
        setDataExercise(response.data);
      })
      .catch(error => console.log(error));
  }, [toGo]);

  return (
    <div className="App">
      <ExerciseCard />
      <Router>
        <div className="App">
          <Link className="home" to="/">Home</Link>
          <Link className="register-link" to="/registerform">RegisterForm</Link>
          <Link className="registertotest-link" to="/registertotest">RegisterToTest</Link>
          <Link className="login-link" to="/login">Login</Link>
          <Link className="login-link" to="/logintotest">LoginToTest</Link>
          <Link className="update-exercise" to="/updateexercice">UpdateExercise      </Link>
          <Switch>
            <PrivateRoute path="/updateexercice" component={UpdateExercise} />
            <Route exact path="/" component={Home} />
            <Route path="/logintotest" component={LoginToTest} />
            <Route path="/registertotest" component={RegisterToTest} />
            <Route path="/registerform" component={RegisterForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;