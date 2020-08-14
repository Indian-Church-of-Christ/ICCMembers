import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const dashboardTitleStyle = {
  backgroundColor: '#0b1215',
}

const titleStyle = {
  color: 'white',
  textAlign: 'center',
}

const subTitleStyle = {
  fontStyle: 'italic',
}

const selectedStyle = {
  color: 'grey',
  textDecoration: 'underline',
  fontStyle: 'italic',
}

const DashboardTitle = (props) => {
  let stStyle = props.isSelected ? selectedStyle : subTitleStyle

  return (
    <div>
      <Card style = {dashboardTitleStyle}>
        <CardBody style = {titleStyle} onClick={props.onTitleClick}>
          <CardTitle> <h4>{props.title}</h4></CardTitle>
          <CardSubtitle style = {stStyle}>{props.type}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardTitle;