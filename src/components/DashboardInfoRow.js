import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DashboardInfo from './DashboardInfo';

const DashboardInfoRow = (props) => {
  let membersSelected = (props.shownChildren === "members") ? true : false
  let menSelected = (props.shownChildren === "men") ? true : false
  let womenSelected = (props.shownChildren === "women") ? true : false
  
    return (
      <Container style ={{padding:"0px"}}>
          <Row noGutters>
              <Col>
                <DashboardInfo onInfoClick={props.onMembersClick}
                count={props.memberCount} countName = "Members"
                isSelected={membersSelected}/>
              </Col>
              <Col>
                <DashboardInfo onInfoClick={props.onMenClick}
                count={props.menCount} countName = "Men"
                isSelected={menSelected}/>
              </Col>
              <Col>
                <DashboardInfo onInfoClick={props.onWomenClick}
                count={props.womenCount} countName = "Women"
                isSelected={womenSelected}/>
              </Col>
          </Row>
      </Container>
    );
  }
  
  export default DashboardInfoRow;