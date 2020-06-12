import React from 'react';
import AssignmentInput from '../components/AssignmentInput';


export default class AssignmentModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return <div>
      <AssignmentInput />
    </div>;
  }
}