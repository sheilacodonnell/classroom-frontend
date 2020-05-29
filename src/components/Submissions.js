import React from 'react'

const Submissions = (props) => {
  console.log(props)

  return(
    <div>
      Submissions
      {props.submissions && props.submissions.map(submission =>
        <li>
          {submission.student_id} - {submission.grade}
        </li>
        )}
    </div>
  )
}

export default Submissions;