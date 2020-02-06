import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//import { addExercise } from "../actions";

const AddExercise = props => {
    const [newExercise, setNewExercise] = useState({
        name: "",
        sets: Number(""),
        reps: Number(""),
        weight: Number(""),
        body_region: "",
        journal: "",
        date: "",

    })
    const id = localStorage.getItem("userId")
    const handleSubmit = event => {
        event.preventDefault()
        console.log(newExercise)
    }

    const handleAdd = event => {
        axiosWithAuth()
            .post(`/api/users/${id}/exercises`, newExercise)
            .then(response => {
                window.location.reload(false);
                props.history.push('/');
                // addExercise(newExercise)
                console.log(response.event.target)
                //setNewExercise(initialState)
                setNewExercise({

                    name: "",
                    sets: Number(""),
                    reps: Number(""),
                    weight: Number(""),
                    body_region: "",
                    journal: "",
                    date: "",
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
                    value={newExercise.name}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="sets">Sets: </label>
                <input
                    type="number"
                    name="sets"
                    value={newExercise.sets}
                    onChange={handleChangesAdd} >
                </input>

                <label htmlFor="reps">Reps: </label>
                <input
                    type="number"
                    name="reps"
                    value={newExercise.reps}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="weight">Weight: </label>
                <input
                    type="number"
                    name="weight"
                    value={newExercise.weight}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="body_region">Body Region: </label>
                <input
                    type="text"
                    name="body_region"
                    value={newExercise.body_region}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="journal">Journal: </label>
                <input
                    type="text"
                    name="journal"
                    value={newExercise.journal}
                    onChange={handleChangesAdd}>
                </input>

                <label htmlFor="date">Date: </label>
                <input
                    type="text"
                    name="date"
                    value={newExercise.date}
                    onChange={handleChangesAdd}>
                </input>
                <button type="submit" className="button" onClick={handleAdd}>Add Exercise</button>
            </form>
        </div>
    )
}
export default AddExercise;