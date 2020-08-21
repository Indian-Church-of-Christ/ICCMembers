import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDashboard: 2,
    }
  }
  
  onDashboardSelection = (id) => {
    if( this.state.selectedDashboard !== id ) {
      this.setState({selectedDashboard: id});
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar onDashboardSelection={this.onDashboardSelection}/>
        <MainContainer onDashboardSelection={this.onDashboardSelection}
          selectedDashboard={this.state.selectedDashboard}/>
        <Footer />
      </div>
      
    );
  }
}

export default App;
