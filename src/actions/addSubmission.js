export const addSubmission = (submission, assignmentId, teacherId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/teachers/${teacherId}/assignments/${assignmentId}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    })
    .then(response => response.json())
    .then(submission => dispatch({type: 'ADD_SUBMISSION', payload: submission}))
  }
}

export default addSubmission;