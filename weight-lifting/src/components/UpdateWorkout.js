


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { connect } from "react-redux"
// import { editWorkout, deleteWorkout } from "../actions";

// const UpdateWorkout = (props) => {

//   const { name, date, id } = props.i;
//   const [editing, setEditing] = useState(false);
//   const [state, setState] = useState({
//     name: name,
//     date: date,
//     id: id
//   });

//   const isEditing = () => { setEditing(!editing) };

//   const handleEdit = event => {
//     event.preventDefault()
//     props.editWorkout(state)
//     setEditing(!editing)
//   }

//   const handleChangesEdit = event => {
//     setState({
//       ...state,
//       [event.target.name]: event.target.value
//     })
//   }

//   return (
//     <div>
//       <h3 className="">Add Exercise</h3>
//       {editing ? (
//         <form className="add-exercice" onSubmit={handleEdit}>
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="name"
//             onChange={handleChangesEdit}>
//           </input>

//           <label htmlFor="date">Date: </label>
//           <input
//             type="text"
//             name="date"
//             placeholder="date"
//             onChange={handleChangesEdit}>
//           </input>
//           <button> Save </button>
//         </form>

//       ) : (
//           <div>
//             <h2>{name}</h2>
//             <p>{date}</p>
//             <button className="button" onClick={isEditing}> Edit </button>
//           </div>
//         )}
//       <button className="button" onClick={event => props.deleteWorkout(id)}> Delete </button>
//       <div>Workout</div>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     ...state
//   };
// };
// export default connect(mapStateToProps, { editWorkout, deleteWorkout })(UpdateWorkout);