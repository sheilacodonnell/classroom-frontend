import React from 'react';
import { Link } from 'react-router-dom';

const Assignments = (props) => {
  if (!props.assignments){
    return <div>Loading</div>
  }

  const currentAssignments = props.assignments.filter(a => {
    if (new Date(a.due_date) > new Date())
    return a;
    }
  );

  const sortedAssignments = currentAssignments.sort(function(a, b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.due_date) - new Date(b.due_date);
  });

  return (
    <div>

     {sortedAssignments.map(assignment =>
     <li>
      <Link to={`/teachers/${assignment.teacher_id}/assignments/${assignment.id}`}>{assignment.title} - {assignment.due_date}</Link>
      </li>)}

    </div>
  )
}

export default Assignments;