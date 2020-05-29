export default function assignmentReducer(state = {assignments: []}, action) {
  switch (action.type) {
    case 'FETCH_ASSIGNMENTS':
      return {assignments: action.payload }
    case 'ADD_ASSIGNMENT':
      return {...state, assignments: [...state.assignments, action.payload]}
    case 'ADD_SUBMISSION':
      return {...state, assignments: state.assignments.map(assignment => {
        // replace the account with the new one in the payload if there is a match
        if (assignment.id === action.payload.id) {
          return action.payload
        } else {
          return assignment
        }
      })}  
    default:
      return state
    }
  }


