import React from 'react';

const Students = (props) => {

  const students = props.students

  if (!students){
    return <div>Loading</div>
  }
  
  return (
    <div>
     <table>
       <thead> 
         <th>Name</th>
         <th>Current Grade Average</th>
       </thead>
       <tbody>
       {props.students.map(student =>
         <tr>
           <td>
          {student.name}
          </td>
          <td>
          {student.grade_average}
          </td>
        </tr>
      )}

      </tbody>
      </table>
    </div>
  )
}

export default Students;