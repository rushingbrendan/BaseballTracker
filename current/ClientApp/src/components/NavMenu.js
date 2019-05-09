import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import './NavMenu.css';


{/* <div>
<Nav >
  <LinkContainer to={'/'} exact>
    <NavItem>
      Home
    </NavItem>
  </LinkContainer>
  <LinkContainer to={'/counter'}>
    <NavItem>
      Counter
    </NavItem>
  </LinkContainer>
  <LinkContainer to={'/fetchdata'}>
    <NavItem>
      Fetch data
    </NavItem>
  </LinkContainer>
</Nav>    
</div> */}


export default props => (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <ul class="navbar-nav">
    <LinkContainer to={'/'} exact>
      <li class="nav-item active">
        <a class="nav-link">Home <span class="sr-only">(current)</span></a>
      </li>
    </LinkContainer>
    <LinkContainer to={'/baseballscoreboard'}>
      <li class="nav-item">
        <a class="nav-link" >Baseball Scoreboard</a>
      </li>
    </LinkContainer>
    <LinkContainer to={'/counter'}>
      <li class="nav-item">
        <a class="nav-link">Counter</a>
      </li>
    </LinkContainer>
    <LinkContainer to={'/fetchdata'}>
      <li class="nav-item">
        <a class="nav-link">Fetch Data</a>
      </li>
    </LinkContainer>
  </ul>  
</nav>
);
