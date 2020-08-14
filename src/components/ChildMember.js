import React from 'react';
import {
  Card, CardBody, CardSubtitle,
} from 'reactstrap';

const childMemberStyle = {
  backgroundColor: '#1f4752',
}

const ChildMember = (props) => {
  return (
    <div style ={{padding:"1px"}}>
      <Card style = {childMemberStyle}>
        <CardBody className="text-white">
          <CardSubtitle>{props.title}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default ChildMember;