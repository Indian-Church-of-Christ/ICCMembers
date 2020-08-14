import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DashboardContainer from './DashboardContainer';
import ChildContainer from './ChildContainer';

const mainContStyle = {
  backgroundColor: '#bbd5db',
  //marginTop: '50px',
}

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      groupInfo: {},
      parentGroup: {},
      nextGroup: {},
      prevGroup: {},
      members: [],
      men: [],
      women: [],
      groupGroups: [],
      shownItems: [],
      dashboardId: 1,
      isLoaded: false,
      shownChildren: 'group',
    }
  }

  fetchData(id) {
    this.setState({ isLoaded: false });

    fetch('https://frn-church-structure.herokuapp.com/api/GroupDashboard_v1/' + id + '/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          groupInfo: json.groupInfo,
          parentGroup: json.parentGroup,
          nextGroup: json.nextGroup,
          prevGroup: json.prevGroup,
          members: json.members,
          men: json.men,
          women: json.women,
          groupGroups: json.groupGroups,
          shownItems: json.groupGroups,
          shownChildren: 'group',
          dashboardId: id,
        })
      });
  }
  componentDidMount() {
    this.fetchData(this.props.selectedDashboard)
  }

  static getDerivedStateFromProps(nextProps, prevState)
  {
    if( nextProps.selectedDashboard !== prevState.dashboardId )
    {
      return {dashboardId: nextProps.selectedDashboard};
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if( prevState.dashboardId !== this.state.dashboardId ) {
      this.fetchData(this.state.dashboardId)
    }
  }

  onTitleClick = () => {
    this.setState({ shownItems: this.state.groupGroups });
    this.setState({ shownChildren: 'group' });
  }

  onMembersClick = () => {
    this.setState({ shownItems: this.state.members });
    this.setState({ shownChildren: 'members' });
  }
  onMenClick = () => {
    this.setState({ shownItems: this.state.men });
    this.setState({ shownChildren: 'men' });
  }
  onWomenClick = () => {
    this.setState({ shownItems: this.state.women });
    this.setState({ shownChildren: 'women' });
  }

  onChildGroupClick = (id) => {
    this.props.onDashboardSelection(id)
  }

  render() {
    if (!this.state.isLoaded) {
      return <div style={mainContStyle}> loading .... </div>
    }

    let showMembers = (this.state.shownChildren === "group") ? false : true

    return (
      <Container style={mainContStyle} fluid>
        <Row>
          <Col md="4">
            <DashboardContainer groupInfo={this.state.groupInfo} onTitleClick={this.onTitleClick}
              onMembersClick={this.onMembersClick} onMenClick={this.onMenClick}
              onWomenClick={this.onWomenClick}
              shownChildren={this.state.shownChildren} />
          </Col>
          <Col md="8">
            <ChildContainer items={this.state.shownItems}
              onChildGroupClick={this.onChildGroupClick} showMembers={showMembers} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContainer;