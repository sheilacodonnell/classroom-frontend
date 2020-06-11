export default function TeacherReducer(state = {teachers: [], teacher: [] }, action) {
  switch (action.type) {
    case 'FETCH_TEACHERS':
      return {...state, teachers: action.payload }
    case 'FETCH_TEACHER':
      return {...state, teacher: action.payload }
    default:
      return state
  }
}
