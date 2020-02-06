import { axiosWithAuth } from "../utils/axiosWithAuth";

export const USER_REGISTER_START = "USER_REGISTER_START"
export const USER_REGISTER_SUCCESS = "USER_REGISTERE_SUCCESS"
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE"

export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "ADD_EXIRCISE_FAILURE"

export const FETCHING_EXERCISE_START = "FETCHING_EXERCISE_START"
export const FETCHING_EXERCISE_SUCCESS = "FETCHING_EXERCISE_SUCCESS"
export const FETCHING_EXERCISE_FAILURE = "FETCHING_EXERCISE_FAILURE"

export const ADD_EXERCISE_START = "ADD_EXERCISE_START"
export const ADD_EXERCISE_SUCCESS = "ADD_EXERCISE_SUCCESS"
export const ADD_EXERCISE_FAILURE = "ADD_EXIRCISE_FAILURE"

export const FETCHING_WORKOUT_START = "FETCHING_WORKOUT_START"
export const FETCHING_WORKOUT_SUCCESS = "FETCHING_WORKOUT_SUCCESS"
export const FETCHING_WORKOUT_FAILURE = "FETCHING_WORKOUT_FAILURE"

export const ADD_WORKOUT_START = "ADD_WORKOUT_START"
export const ADD_WORKOUT_SUCCESS = "ADD_WORKOUT_SUCCESS"
export const ADD_WORKOUT_FAILURE = "ADD_WORKOUT_FAILURE"

export const EDIT_WORKOUT_START = "EDIT_WORKOUT_START"
export const EDIT_WORKOUT_SUCCESS = "EDIT_WORKOUT_SUCCESS"
export const EDIT_WORKOUT_FAILURE = "EDIT_WORKOUT_FAILURE"

export const DELETE_WORKOUT_START = "DELETE_WORKOUT_START"
export const DELETE_WORKOUT_SUCCESS = "DELETE_WORKOUT_SUCCESS"
export const DELETE_WORKOUT_FAILURE = "DELETE_WORKOUT_FAILURE"

export const userRegister = ({ registerCredentials }) => dispatch => {
      dispatch({ type: USER_REGISTER_START });
      axiosWithAuth()
            .post('/api/auth/register', { registerCredentials })
            .then(response => {
                  console.log('response', response)
                  dispatch({ type: USER_REGISTER_SUCCESS });
            })
            .catch(error => {
                  dispatch({ type: USER_REGISTER_FAILURE, payload: error.data });
            });
}

export const userLogin = credentials => dispatch => {
      dispatch({ type: USER_LOGIN_START });
      axiosWithAuth()
            .post('/api/auth/login', credentials)
            .then(response => {
                  localStorage.setItem('token', response.data.token)
                  localStorage.setItem('userId', response.data.id)
                  dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.token, id: response.data.id });
            })
            .catch(error => {
                  dispatch({ type: USER_LOGIN_FAILURE, payload: error.data });
            });
}

export const fetchExercise = () => dispatch => {
      dispatch({ type: FETCHING_EXERCISE_START });
      axiosWithAuth()
            .get('/api/users/id/exercises')
            .then(response => {
                  dispatch({ type: FETCHING_EXERCISE_SUCCESS, payload: response.data });
            })
            .catch(error => {
                  dispatch({ type: FETCHING_EXERCISE_FAILURE, payload: error.data });
            });
}

export const addExercise = payload => dispatch => {
      dispatch({ type: ADD_EXERCISE_START });
      axiosWithAuth()
            .post('/api/users/id/exercises', payload)
            .then(response => {
                  dispatch({ type: ADD_EXERCISE_SUCCESS, payload: response.data });
            })
            .catch(error => {
                  dispatch({ type: ADD_EXERCISE_FAILURE, payload: error.data });
            });
}

export const fetchworkout = id => dispatch => {
      dispatch({ type: FETCHING_WORKOUT_START });
      axiosWithAuth()
            .get(`/api/exercises/${id}`)
            .then(response => {
                  dispatch({ type: FETCHING_WORKOUT_SUCCESS, payload: response.data });
            })
            .catch(error => {
                  dispatch({ type: FETCHING_WORKOUT_FAILURE, payload: error.data });
            });
}

export const editWorkout = input => dispatch => {
      dispatch({ type: EDIT_WORKOUT_START });
      axiosWithAuth()
            .put(`/api/exercises/${input.id}`, input)
            .then(response => {
                  dispatch({ type: EDIT_WORKOUT_SUCCESS, payload: response.data.updated });
            })
            .catch(error => {
                  dispatch({ type: EDIT_WORKOUT_FAILURE, payload: error.data });
            });
}

export const deleteWorkout = input => dispatch => {
      dispatch({ type: DELETE_WORKOUT_START });
      axiosWithAuth()
            .delete(`/api/exercises/id${input}`)
            .then(response => {
                  dispatch({ type: DELETE_WORKOUT_SUCCESS, payload: input });
            })
            .catch(error => {
                  dispatch({ type: DELETE_WORKOUT_FAILURE, payload: error.input });
            });
}