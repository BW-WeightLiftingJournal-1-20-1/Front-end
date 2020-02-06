import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import PrivateRoute from './utils/PrivateRoute';
import { axiosWithAuth } from "./utils/axiosWithAuth";
import Home from "./components/Home";

//import RegisterForm from "./components/RegisterForm";
import RegisterToTest from "./components/RegisterToTest";

//import Login from "./components/Login";
import LoginToTest from "./components/LoginToTest";

import Exercise from "./components/Exercise";
import AddExercise from "./components/AddExercise";
import SavedExercise from "./components/SavedExercise";
import UpdateExercise from "./components/UpdateExercise";
import ExerciseList from "./components/ExerciseList";
import './App.css';

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
        <Link className="login-link" to="/logintotest">LoginToTest</Link>
        <Link className="register-link" to="/registertotest">RegisterToTest</Link>
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
        <Route exact path="/" component={Home} />
        <Route path="/logintotest" component={LoginToTest} />
        <Route path="/registertotest" component={RegisterToTest} />
      </Router>
    </div>
  );
}

export default App;