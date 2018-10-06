import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link,Route} from 'react-router-dom';
import logo from './images/usa-softball-of-colorado.png';
import SBHome from './components/sbhome';
import Registration from './components/registration';
import './App.css';
import './css/cosb-media568.css';


class App extends Component {

  showMobileMenu() {
    var x = document.getElementById("sb-navbar");
    if (x.className === "sb-nav") {
        x.className += " responsive";
    } else {
        x.className = "sb-nav";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header container-fluid">
          <div className='row'>
            <div className='col col-sm-10 col-md-4'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          <nav className='sb-nav' id='sb-navbar'>
            <a href="javascript:void(0);" className="icon" onClick={() => this.showMobileMenu()}>
              <i className="fa fa-bars"></i>
            </a>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='#'>Training</Link></li>
              <li><a href='#'>Testing</a></li>
              <li><a href='#'>Tournaments</a></li>
              <li><a href='#'>Awards</a></li>
              <li><Link to='/registration'>2018 Registration</Link></li>
            </ul>
          </nav>
        </header>
          {/* <Navbar className="sb-nav" collapseOnSelect>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} ><Link to='/'>Home</Link></NavItem>
                <NavItem eventKey={3} >Tournaments</NavItem>
                <NavItem eventKey={4} >Training</NavItem>
                <NavItem eventKey={5} >Awards</NavItem>
                <NavItem eventKey={6} >Testing</NavItem>
                <NavItem eventKey={7} >2018 Registration</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}
        <main>
          <Route exact path='/' component={SBHome}></Route>
          <Route path='/registration' component={Registration}></Route>
        </main>
        
      </div>
    );
  }
}

export default App;
