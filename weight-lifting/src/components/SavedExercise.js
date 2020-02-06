import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedExercise extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-exercise">
        <h3></h3>
        {this.props.list.map(exercise => {
          return (

            <NavLink
              to={`/exercises/${exercise.id}`}
              key={exercise.id}
              activeClassName="saved-active"
            >
              <span className="saved-exercise">{exercise.name}</span>
            </NavLink>
          );
        })}
        <div className="">
          {/* <Link className="home-button" to="/">Home</Link>
          <Link className="add-exercise-button" to="/AddExercise">Add Exercise</Link> */}
        </div>
      </div>
    );
  }
}