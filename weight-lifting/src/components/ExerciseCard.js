import React from "react";

const ExerciseCard = props => {
    const { name, sets, reps, weight, body_region, journal, date } = props.exercise;
    return (
        <div>
            <p>{name}</p>
            <p>{sets}</p>
            <p>{reps}</p>
            <p>{weight}</p>
            <p>{body_region}</p>
            <p>{journal}</p>
            <p>{date}</p>
        </div>
    )
};
export default ExerciseCard;