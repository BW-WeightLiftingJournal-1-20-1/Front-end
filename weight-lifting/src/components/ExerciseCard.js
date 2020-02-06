import React from "react";
import styled from 'styled-components';

const Exercisecard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border-radius:30px;
margin-right:32%;
margin-left:32%;
margin-top: 10%;
width:35%;
background-color: #00A35E;
padding-bottom:5%;
padding-top: 2%;
`;
const Cardkeys = styled.p`
margin-bottom:2%;
color:white;
`;

const ExerciseCard = props => {
    const { name, sets, reps, weight, body_region, journal, date } = props.exercise;
    return (
        <Exercisecard>
            <Cardkeys>Name:{name}</Cardkeys>
            <Cardkeys>Sets:{sets}</Cardkeys>
            <Cardkeys>Reps:{reps}</Cardkeys>
            <Cardkeys>Weight:{weight}</Cardkeys>
            <Cardkeys>Region:{body_region}</Cardkeys>
            <Cardkeys>Journal:{journal}</Cardkeys>
            <Cardkeys>Date:{date}</Cardkeys>
        </Exercisecard>
    )
};
export default ExerciseCard;