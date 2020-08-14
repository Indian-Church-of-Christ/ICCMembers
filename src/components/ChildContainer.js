import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChildGroup from './ChildGroup';
import ChildMember from './ChildMember';

const childContainerStyle = {
  paddingLeft: '0px',
  paddingRight: '0px',
}

const ChildContainer = (props) => {
  if( props.items == null )
    return( <div>No Groups to display</div> );

  if (props.showMembers) {
    return (
      <Container style={childContainerStyle}>
        <Row noGutters>
          {
            props.items.map((item) =>
              <Col md="4"><ChildMember title={item.name}/></Col>
            )
          }
        </Row>
      </Container>
    );
  }

  return (
    <Container style={childContainerStyle}>
      <Row noGutters>
        {
          props.items.map((item) =>
            <Col md="4"><ChildGroup title={item.name}
              type={item.type} onChildGroupClick={props.onChildGroupClick}
              id={item.id} /></Col>
          )
        }
      </Row>
    </Container>
  );
}

export default ChildContainer;