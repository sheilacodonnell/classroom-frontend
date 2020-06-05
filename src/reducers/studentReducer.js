export default function studentReducer(state = {students: []}, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return {students: action.payload }
    default:
      return state
  }
}
