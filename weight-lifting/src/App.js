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

      <Router >
     
          <NavLink className="navlink dashboard" to="/dashboard">Dashboard</NavLink>
          <NavLink className="navlink register" to="/registerform">Register</NavLink>
          <NavLink className="navlink login" to="/login">Login</NavLink>
          <NavLink className="navlink add" to="/addexercise">Add Exercise</NavLink>

          <SavedExercise list={savedList} />
          <Route path="/dashboard" component={ExerciseList} />
          <Route path="/update-exercise/:id" render={props => (
            <UpdateExercise {...props} exercises={exercises} />
          )} />
          <Route
            path="/exercises/:id"
            render={props => {
              return <Exercise {...props} addToSavedList={addToSavedList} exercises={exercises} />;
            }} />

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/registerform" component={RegisterForm} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/addexercise/" component={AddExercise} render={props => (
            <AddExercise {...props} exercises={exercises} />
          )} />
     
      </Router>

    </div>
  );
}
export default App;