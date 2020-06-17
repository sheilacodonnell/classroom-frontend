import React from "react";
import Table from './Table'

class Students extends React.Component {

  render() {

if (!this.props.students){
  return <div>Loading</div>
}
const data = this.props.students 

const columns = [
  {
    Header: "Name",
    columns: [
      {
        accessor: "name"
      }
    ]
  },
  {
    Header: "Current Average",
    columns: [
      {
        accessor: "grade_average"
      }
    ]
  }
];

return (
  <div className="App">
    <Table columns={columns} data={data} />
  </div>
)}};

export default Students

