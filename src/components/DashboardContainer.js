import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DashboardTitle from './DashboardTitle';
import DashboardInfoRow from './DashboardInfoRow';

const dashboardContainerStyle = {
  backgroundColor: '#0b1215',
  paddingLeft: '0px',
  paddingRight: '0px',
}

const DashboardContainer = (props) => {
  if( props.groupInfo == null )
    return( <div>Dashboard information not available</div> );

  let groupSelected = (props.shownChildren === "group") ? true : false

  return (
    <Container style = {dashboardContainerStyle}>
        <Row>
          <Col>
            <DashboardTitle title={props.groupInfo.name} type={props.groupInfo.type}
              isSelected = {groupSelected}
              onTitleClick={props.onTitleClick}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <DashboardInfoRow memberCount={props.groupInfo.memberCount}
            menCount={props.groupInfo.menCount} womenCount={props.groupInfo.womenCount}
            onMembersClick={props.onMembersClick} onMenClick={props.onMenClick}
            onWomenClick={props.onWomenClick}
            shownChildren={props.shownChildren}/>
          </Col>
        </Row>
    </Container>
  );
}

export default DashboardContainer;