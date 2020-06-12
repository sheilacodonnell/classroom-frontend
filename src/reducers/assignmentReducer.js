export default function assignmentReducer(state = {assignments: [], assignment: []}, action) {
  switch (action.type) {
    case 'FETCH_ASSIGNMENTS':
      return {assignments: action.payload }
    case 'FETCH_ASSIGNMENT':
      return {assignment: action.payload }
    case 'ADD_ASSIGNMENT':
      return {...state, assignments: [...state.assignments, action.payload] }
    case 'ADD_SUBMISSION':
      return {...state, assignment: action.payload }
    case 'DELETE_SUBMISSION':
      return {...state, assignment: action.payload }
    default:
      return state
    }
  }
