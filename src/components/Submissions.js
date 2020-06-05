import React from 'react';
import { connect } from 'react-redux';
import { deleteSubmission } from '../actions/deleteSubmission'
import SubmissionInput from '../components/SubmissionInput'


const Submissions = (props) => {

  const student_name = (submission) => {
    return props.students.students.find(student => student.id == submission.student_id).name
  }

  const incompleteStudents = () => {
    return props.students.students.filter(student => !props.submissions.map(s => s.student_id).includes(student.id))
  }

  const handleDelete = (submission, props) => {
    props.deleteSubmission(submission.id, submission.assignment_id, props.assignment.teacher_id)
  }

  return (
    <div>
      <h2>Complete</h2>
      <table>
        <thead>
          <th>Name</th>
          <th>Grade</th>
          <th></th>
        </thead>

        {props.submissions && props.submissions.map(submission =>
        <tr>
          <td>
            {submission ? student_name(submission) : null}
          </td>
          <td>
            {submission ? submission.grade : null}
          </td>
          <td>
            <button onClick={() => handleDelete(submission, props)}>Delete</button>
          </td>
        </tr>
        )}
      </table>

      <h2>Incomplete</h2>
      <table>
        <thead>
          <th>Name</th>
          <th>Grade</th>
          <th></th>
        </thead>

        {props.submissions && incompleteStudents().map(student =>
        <tr>
            <SubmissionInput assignment={props.assignment} student={student}/>
        </tr>
        )}
      </table>
    </div>
  )
}
export default connect(null, {deleteSubmission})(Submissions);