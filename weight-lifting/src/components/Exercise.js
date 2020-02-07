import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ExerciseCard from "./ExerciseCard";

export default class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: null
    };
  }

  componentDidMount() {
    this.fetchExercise(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchExercise(newProps.match.params.id);
    }
  }

  fetchExercise = id => {
    axiosWithAuth()
      .get(`api/users/id/exercises/${id}`)
      .then(response => this.setState({ exercise: response.data }))
      .catch(error => console.log(error.response));
  };

  saveExercise = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.exercise);
  };

  handleUpdate = event => {
    event.preventDefault();
    this.props.history.push(`/update-exercise/${this.state.exercise.id}`);
  };

    handleDelete = event => {
        event.preventDefault();
        axiosWithAuth
        .delete(`/api/exercises/${this.state.exercise.id}`)
          .then(res => {
            this.props.history.push('/update-exercise');
          })
          .catch(error => console.log(error))
      }

      render() {
        if (!this.state.exercise) {
          return <div>Loading workout entries...</div>;
        }

        return (
            <div className="save-wrapper">
              <ExerciseCard exercise={this.state.exercise} />
              <span> <button className="save-button" onClick={this.saveExercise}>Save</button></span>
              <span> <button className="edit-button" onClick={this.handleUpdate}>Edit</button></span>
              <span><button className="delete-button" onClick={this.handleDelete}>Delete</button></span>
            </div>
          );
        }
      }