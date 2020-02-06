import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import { axiosWithAuth } from "./utils/axiosWithAuth";
import Dashboard from "./components/Dashboard";

import RegisterForm from "./components/RegisterForm";

import Login from "./components/Login";

import ExerciseList from "./components/ExerciseList";
import SavedExercise from "./components/SavedExercise";
import UpdateExercise from "./components/UpdateExercise";
import Exercise from "./components/Exercise";
import AddExercise from "./components/AddExercise";

function App(props) {
  const [savedList, setSavedList] = useState([]);
  const addToSavedList = exercise => {
    setSavedList([...savedList, exercise]);
  }

  const id = localStorage.getItem("userId")
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}/exercises/`)
      .then(response => {
        console.log(response.data);
        setExercises(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <Router>
        <Link className="home" to="/">Home</Link>
        <Link className="login-link" to="/login">Login</Link>
        <Link className="register-link" to="/registerform">RegisterForm</Link>
        <Link className="addexercise" to="/addexercise">Add Exercise</Link>
        <SavedExercise list={savedList} />
        <Route path="/" component={ExerciseList} />
        <Route path="/addexercise/" render={props => (
          <AddExercise {...props} exercises={exercises} />
        )} />
        <Route path="/update-exercise/:id" render={props => (
          <UpdateExercise {...props} exercises={exercises} />
        )} />
        <Route
          path="/exercises/:id"
          render={props => {
            return <Exercise {...props} addToSavedList={addToSavedList} exercises={exercises} />;
          }} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/registerform" component={RegisterForm} />
      </Router>
    </div>

  );
}

export default App;