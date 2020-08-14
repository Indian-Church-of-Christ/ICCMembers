import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const childGroupStyle = {
  backgroundColor: '#1f4752',
}

const ChildGroup = (props) => {
  return (
    <div style ={{padding:"1px"}}>
      <Card style = {childGroupStyle}>
        <CardBody className="text-white" onClick={() => props.onChildGroupClick(props.id)}>
          <CardTitle> <h5>{props.title}</h5> </CardTitle>
          <CardSubtitle className="font-italic">{props.type}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default ChildGroup;