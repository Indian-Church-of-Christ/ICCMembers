import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const dashboardInfoStyle = {
  backgroundColor: '#0b1215',
}

const bodyStyle = {
  color: 'white',
  textAlign: 'center',
  whiteSpace: 'nowrap',
}
const selectedStyle = {
  color: 'gray',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'underline',
}

const DashboardInfo = (props) => {
  let stStyle = props.isSelected ? selectedStyle : bodyStyle

  return (
    <div style ={{padding:"0px"}}>
      <Card style = {dashboardInfoStyle}>
        <CardBody style={bodyStyle} onClick={props.onInfoClick}>
          <CardTitle><h5>{props.count}</h5></CardTitle>
          <CardSubtitle style={stStyle}><small><small>{props.countName}</small></small></CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardInfo;