import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
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
        <NavLink className="navlink" to="/">Dashboard</NavLink>
        <NavLink className="navlink" to="/login">Login</NavLink>
        <NavLink className="navlink" to="/registerform">Register Form</NavLink>
        <NavLink className="navlink" to="/addexercise">Add Exercise</NavLink>

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
       
        <Route path="/" component={Dashboard} />
        <Route path="/registerform" component={RegisterForm} />
        <Route path="/login" component={Login} />
        <Route path="/addexercise" component={AddExercise} />
      </Router>
    </div>

  );
}

export default App;