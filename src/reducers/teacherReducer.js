export default function TeacherReducer(state = {teachers: []}, action) {
  switch (action.type) {
    case 'FETCH_TEACHERS':
      return {teachers: action.payload }
    default:
      return state
  }
}
