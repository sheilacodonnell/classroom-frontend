import { fetchStudents } from './fetchStudents'

export function fetchAssignment(teacherId, assignmentId) {
  // this is the action creator which creates an action object
  // what we dispatch is the action object
  // dispatches to the reducer

  return (dispatch) => {
    //this fetch request return a promise that we'll get a response eventually
  fetch(`http://localhost:3000/api/teachers/${teacherId}/assignments/${assignmentId}`)
  // once that promise is resolved the response from our request is passed into this first then, and its converted to json
  .then(res => res.json())
  // that json is passed as the first argument to the next then
  // we then dispatch this action object to the reducer
  .then(data => dispatch({
    type: 'FETCH_ASSIGNMENT',
    payload: data
  }),
 dispatch(fetchStudents(teacherId, 'FETCH_STUDENTS')))
  }
}