import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

const Exercise = props => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.sets}</p>
            <p>{props.reps}</p>
            <p>{props.weight}</p>
            <p>{props.body_region}</p>
            <p>{props.date}</p>
        </div>
    )
};

const ExerciseCard = props => {
    const [exercises, setExercises] = useState([]);

    const addExercise = exerciseToAdd => {
        axiosWithAuth()
            .post('/api/users/id/exercises', exerciseToAdd)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className="exercice_card">
            <Exercise />
            {/* <Exercise name={name} sets={sets} reps={reps} weight={weight} body_region={body_region} date={date} /> */}
        </div>
    );
};
export default ExerciseCard;