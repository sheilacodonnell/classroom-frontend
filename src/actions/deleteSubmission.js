export const deleteSubmission = (submissionId, assignmentId, teacherId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/teachers/${teacherId}/assignments/${assignmentId}/submissions/${submissionId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(assignment => dispatch({type: 'DELETE_SUBMISSION', payload: assignment}))
  }
}

//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/teachers/${teacherId}/assignments/${assignmentId}/submissions/${submissionId}`, {
//       method: 'DELETE'
//     })
//     .then(response => response.json())
//     .then(assignment => dispatch({type: 'DELETE_SUBMISSION', payload: assignment}))
//   }
// }

export default deleteSubmission;