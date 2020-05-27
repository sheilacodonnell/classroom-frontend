export default function assignmentReducer(state = {assignments: []}, action) {
  switch (action.type) {
    case 'FETCH_ASSIGNMENTS':
      return {assignments: action.payload }
    case 'ADD_ASSIGNMENT':
      return {...state, assignments: [...state.assignments, action.payload]}
    default:
      return state
    }
  }


