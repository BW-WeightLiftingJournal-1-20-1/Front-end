import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

//import { addExercise } from "../actions";


const Addexerciseform = styled.form`
display:flex;
flex-direction:column;
align-items:center;
border-radius:30px;
margin-right:32%;
margin-left:32%;
margin-top: 4%;
width:35%;
background-color: #00A35E;
padding-bottom:5%;
padding-top: 2%;
`;
const Topnav = styled.nav`
display:flex;
justify-content:flex-end;
justify-content:space-between;
padding-bottom:10px;
padding-top:10px;
width 100%;
align-items:center;
background-color: #00A35E;
`;
const Anchorstyle = styled.a`
padding-right:5%;
color: white;

`;
const Headertext = styled.h1`
color: white;
padding-left:5%;
`;
const Footerstyle= styled.footer`
display:flex;
justify-content:center;
background-color:black;
width 100%;
padding-top:10px;
padding-bottom:10px;
margin-top 4%;

`;
const Copyright = styled.p`
color:white;
`;
const Lambdateam = styled.span`
color:green;
`;

const Title = styled.h2`
color: #C4DFE6;
padding-bottom:10%;
`;
const Addexerciselabs = styled.label`
padding-top:4%;
color:white;
`;

const Dateinput = styled.input`
margin-bottom:5%;
`;


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
             <Topnav >
     <Headertext>Weightlifting Journal</Headertext>
        <Anchorstyle>Dashboard</Anchorstyle>
        <Anchorstyle>Login</Anchorstyle>
        <Anchorstyle>Add Exercise</Anchorstyle>
        <Anchorstyle>Saved Exercises</Anchorstyle>
  </Topnav >
            
            <Addexerciseform className="add-exercice" onSubmit={handleSubmit}>
            <div>
               <Title>Add Exercise</Title>
            </div>

                <Addexerciselabs htmlFor="name">Name: </Addexerciselabs>
                <input
                    type="text"
                    name="name"
                    value={newExercise.name}
                    onChange={handleChangesAdd}>
                </input>

                <Addexerciselabs htmlFor="sets">Sets: </Addexerciselabs>
                <input
                    type="number"
                    name="sets"
                    value={newExercise.sets}
                    onChange={handleChangesAdd} >
                </input>

                <Addexerciselabs htmlFor="reps">Reps: </Addexerciselabs>
                <input
                    type="number"
                    name="reps"
                    value={newExercise.reps}
                    onChange={handleChangesAdd}>
                </input>

                <Addexerciselabs htmlFor="weight">Weight: </Addexerciselabs>
                <input
                    type="number"
                    name="weight"
                    value={newExercise.weight}
                    onChange={handleChangesAdd}>
                </input>

                <Addexerciselabs htmlFor="body_region">Body Region: </Addexerciselabs>
                <input
                    type="text"
                    name="body_region"
                    value={newExercise.body_region}
                    onChange={handleChangesAdd}>
                </input>

                <Addexerciselabs htmlFor="journal">Journal: </Addexerciselabs>
                <input
                    type="text"
                    name="journal"
                    value={newExercise.journal}
                    onChange={handleChangesAdd}>
                </input>

                <Addexerciselabs htmlFor="date">Date: </Addexerciselabs>
                <Dateinput
                    type="text"
                    name="date"
                    value={newExercise.date}
                    onChange={handleChangesAdd}>
                </Dateinput>
                <button type="submit" className="button" onClick={handleAdd}>Add Exercise</button>
            </Addexerciseform>

        <Footerstyle>
          <Copyright>Copyright 2019 <Lambdateam>Lamba Team</Lambdateam></Copyright>
        </Footerstyle>
        </div>
    )
}
export default AddExercise;