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
      .get(`api/exercises/${id}`)
      .then(response => this.setState({ exercise: response.data }))
      .catch(error => console.log(error.response));
  };

  cancelExercise = (event) => {
    event.preventDefault();
    this.props.history.push(`/dashboard/${this.state.exercise.id}`);
  };

  handleUpdate = event => {
    event.preventDefault();
    this.props.history.push(`/update-exercise/${this.state.exercise.id}`);
  };

  handleDelete = id => {
    axiosWithAuth()
      .delete(`/api/exercises/${this.state.exercise.id}`)
      .then(res => {
        this.props.history.push('/dashboard');
      })
      .catch(error => console.log(error))
  }


  render() {
    if (!this.state.exercise) {
      return <div></div>;
    }

    return (
      <div className="save-wrapper">
        <ExerciseCard exercise={this.state.exercise} />
        <span> <button className="cancel-button" onClick={this.cancelExercise}>Cancel</button></span>
        <span> <button className="edit-button" onClick={this.handleUpdate}>Edit</button></span>
        <span><button className="delete-button" onClick={this.handleDelete}>Delete</button></span>
      </div>
    );
  }
}