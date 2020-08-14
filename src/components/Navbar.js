import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const FRNNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navbarStyle = {
    backgroundColor: '#4b7d8d',
    /*position: 'fixed',*/
    // top: 0,
    // left: 0,
    // height: '50px',
    // width: '100%',
    // zIndex: '100',
  }

  return (
    <div>
      <Navbar style={navbarStyle} light expand="md">
        <NavbarBrand href="/">KAT Region</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style ={{zIndex:'100'}} className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Go To
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => props.onDashboardSelection(4)}>
                  Central
                </DropdownItem>
                <DropdownItem onClick={() => props.onDashboardSelection(72)}>
                  East
                </DropdownItem>
                <DropdownItem onClick={() => props.onDashboardSelection(105)}>
                  South
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default FRNNavbar;