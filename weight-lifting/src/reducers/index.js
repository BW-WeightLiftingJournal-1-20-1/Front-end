import {
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,

    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,

    FETCHING_EXERCISE_START,
    FETCHING_EXERCISE_SUCCESS,
    FETCHING_EXERCISE_FAILURE,

    ADD_EXERCISE_START,
    ADD_EXERCISE_SUCCESS,
    ADD_EXERCISE_FAILURE,

    FETCHING_WORKOUT_START,
    FETCHING_WORKOUT_SUCCESS,
    FETCHING_WORKOUT_FAILURE,

    ADD_WORKOUT_START,
    ADD_WORKOUT_SUCCESS,
    ADD_WORKOUT_FAILURE,

    EDIT_WORKOUT_START,
    EDIT_WORKOUT_SUCCESS,
    EDIT_WORKOUT_FAILURE,

    DELETE_WORKOUT_START,
    DELETE_WORKOUT_SUCCESS,
    DELETE_WORKOUT_FAILURE,
} from '../actions';


const initialState = {
    exercises: [],
    fetchingExercises: false,
    aadExercises: false,
    addingWorkout: false,
    deletingWorkout: false,
    isLoggedIn: false,
    register: false,
    log: true,
    id: "",
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_START:
            return {
                ...state,
                register: true,
            };

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                register: false,
                error: "",

            };
        case USER_REGISTER_FAILURE:
            return {
                error: action.payload
            };

        case USER_LOGIN_START:
            return {
                ...state,
                register: true,
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                register: false,
                log: false,
                isLoggedIn: true,
                error: "",
            };

        case USER_LOGIN_FAILURE:
            return {
                ...state,
                register: false,
                isLoggedIn: false,
                error: action.payload
            };

        case FETCHING_EXERCISE_START:
            return {
                ...state,
                fetchingExercises: true,

            };
        case FETCHING_EXERCISE_SUCCESS:
            return {
                ...state,
                fetchingExercises: false,
                error: "",
                exercises: action.payload
            };
        case FETCHING_EXERCISE_FAILURE:
            return {
                ...state,
                fetchingExercises: false,
                error: action.payload
            };

        case ADD_EXERCISE_START:
            return {
                ...state,
                addExercises: true,
                error: "",
            };

        case ADD_EXERCISE_SUCCESS:
            return {
                ...state,
                addExercises: false,
                error: "",
                exercises: [...state.addExercise, action.payload]
            };

        case ADD_EXERCISE_FAILURE:
            return {
                ...state,
                addExercises: false,
                error: action.payload
            };

        case FETCHING_WORKOUT_START:
            return {
                ...state,
                fetchingExercises: true,
            };

        case FETCHING_WORKOUT_SUCCESS:
            return {
                ...state,
                fetchingExercises: false,
                error: "",
                exercises: action.payload

            };
        case FETCHING_WORKOUT_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case EDIT_WORKOUT_START:
            return {
                ...state,
                fecthingxercises: true,
            };

        case EDIT_WORKOUT_SUCCESS:
            return {
                ...state,
                fetchingExercises: false,
                exercises: state.exercises.map(i => i.id === action.payload ? action.payload : i)
            };

        case EDIT_WORKOUT_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case DELETE_WORKOUT_START:
            return {
                ...state,
            };

        case DELETE_WORKOUT_SUCCESS:
            return {
                ...state,
                exercises: state.exercises.filter(i => action.payload !== i.id),
                error: "",
            };
        case DELETE_WORKOUT_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};
