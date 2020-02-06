import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//import { connect } from "react-redux"
//import { editWorkout, deleteWorkout } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
  id: "",
  name: "",
  sets: Number(""),
  reps: Number(""),
  weight: Number(""),
  body_region: "",
  journal: "",
  date: ""
  //userId: parseInt(id)
}

const UpdateExercise = (props) => {
  const [editExercise, setEditExercise] = useState(initialItem);
  const { id } = useParams();

  useEffect(() => {
    const exerciseToUpdate = props.exercises.find(thing => `${thing.id}` === id);
    if (exerciseToUpdate) {
      setEditExercise(exerciseToUpdate)
    }
  }, [props.exercises, id])

  const handleChanges = event => {
    setEditExercise({
      ...editExercise,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(`/api/exercises/id/${id}`, editExercise)
      .then(response => {
        props.setEditExercise(response.data)
        props.history.push('/');
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h3 className="">Edit Exercise</h3>
      <div>
        <form className="edit-movie" onSubmit={handleSubmit}>

          <label htmlFor="name">id: </label>
          <input type="text" name="id" value={editExercise.id} onChange={handleChanges}></input>
          
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={editExercise.name} onChange={handleChanges}></input>

          <label htmlFor="sets">Sets: </label>
          <input type="number" name="sets" value={editExercise.sets} onChange={handleChanges}></input>

          <label htmlFor="reps">Reps: </label>
          <input type="number" name="reps" value={editExercise.reps} onChange={handleChanges}></input>

          <label htmlFor="weight">Weight: </label>
          <input type="number" name="weight" value={editExercise.weight} onChange={handleChanges}></input>

          <label htmlFor="reps">Body_Region: </label>
          <input type="text" name="body_region" value={editExercise.body_region} onChange={handleChanges}></input>

          <label htmlFor="journal">Journal: </label>
          <input type="text" name="journal" value={editExercise.journal} onChange={handleChanges}></input>

          <label htmlFor="date">Date: </label>
          <input type="text" name="date" value={editExercise.date} onChange={handleChanges}></input>

          <button type="submit">Edit Exercise</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateExercise;