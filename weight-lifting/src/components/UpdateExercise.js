import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios'
import { connect } from "react-redux"

//import { addExercise } from "../actions";
const id = localStorage.getItem("userId")

const initialState = {
    name: "",
    sets: Number(""),
    reps: Number(""),
    weight: "",
    body_region: "",
    date: "",
    userId: parseInt(id)
}

const UpdateExercise = props => {
    const [newExercise, setNewExercise] = useState(initialState)

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
            .post(`/api/users/id/exercises`, newExercise)
            .then(response => {
                window.location.reload(false);
                props.history.push('/');
                // addExercise(newExercise)
                console.log(newExercise)
                console.log(response.event.target)
                //setNewExercise(initialState)
                setNewExercise({
                    name: "",
                    sets: Number(""),
                    reps: Number(""),
                    weight: "",
                    body_region: "",
                    date: "",
                    userId: parseInt(id)
                })
            })
            .catch(error => console.log(error))
    }


    const handleChangesAdd = event => {
        setNewExercise({
            ...newExercise,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h3 className="add-exercice-title">Add Exercise</h3>
            <form className="add-exercice" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={newExercise.name}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="sets">Sets: </label>
                <input
                    type="number"
                    name="sets"
                    id="sets"
                    value={newExercise.sets}
                    onChange={handleChangesAdd} >
                </input>

                <label htmlFor="reps">Reps: </label>
                <input
                    type="number"
                    name="reps"
                    id="reps"
                    value={newExercise.reps}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="name">Weight: </label>
                <input
                    type="text"
                    name="weight"
                    id="weight"
                    value={newExercise.weight}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="body_region">Body Region: </label>
                <input
                    type="text"
                    name="body_region"
                    id="body_region"
                    value={newExercise.body_region}
                    onChange={handleChangesAdd}>
                </input>
                <label htmlFor="date">Date: </label>
                <input
                    type="text"
                    name="date"
                    value={newExercise.date}
                    onChange={handleChangesAdd}>
                </input>
                <button className="button" type="submit">Add Exercice</button>
            </form>
        </div>
    )
}
export default UpdateExercise;
