import React from 'react';
import { connect } from 'react-redux';
import { deleteSubmission } from '../actions/deleteSubmission'
import Submissions from './Submissions';

const Submission = (props) => {
  let complete_student = props.students.find(student => student.id == props.submission.student_id)

  // array of Submissions
  // array of students
  // find the students who dont have a submission

  const handleDelete = (submission, props) => {
    props.deleteSubmission(submission.id, submission.assignment_id, props.assignment.teacher_id)
  }

  return (
    <div>

      <table>
        <thead>
          <th>Name</th>
          <th>Grade</th>
          <th></th>
        </thead>
        <tr>
          <td>
          {props.submission ? complete_student.name : null}
        </td>
        <td>
          {props.submission ? props.submission.grade : null}
        </td>
        <td>
          <button onClick={() => handleDelete(props.submission, props)}>Delete</button>
        </td>
        </tr>
      </table>

    </div>
  )
}

export default connect(null, {deleteSubmission})(Submission);
// {/* <table>
// <thead> 
//   <th>Name</th>
//   <th>Current Grade Average</th>
// </thead>
// <tbody>
//  {props.students.map(student =>
//    <tr>
//      <td>
//        {student.name}
//      </td>
//      <td>
//        {student.grade_average}
//      </td>
//  </tr>
// )}
// </tbody>
// </table>

// <li>
// {submission.student_id} - {submission.grade}
// <button onClick={() => handleDelete(submission, props)}>Delete</button>
// </li> */}