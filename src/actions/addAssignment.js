export const addAssignment = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/teachers/1/assignments', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(assignment => dispatch({type: 'ADD_ASSIGNMENT', payload: assignment}))
  }
}