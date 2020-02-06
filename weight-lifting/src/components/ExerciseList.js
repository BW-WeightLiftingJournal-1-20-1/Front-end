import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import "../App.css";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
        axiosWithAuth()
            .get('/api/users/id/exercises')
            .then(response => this.setState({ exercises: response.data }))
            .catch(error => console.log(error.response))
    }

    render() {
        return (
          <div className="exercise-list">
            {this.state.exercises.map(exercise => (
              <ExerciseDetails key={exercise.id} exercise={exercise} />
            ))}
          </div>
        );
      }
    }

function ExerciseDetails({ exercise }) {
    return (
      <Link to={`/exercises/${exercise.id}`}>
        <ExerciseCard exercise={exercise} />
      </Link>
    );
  }