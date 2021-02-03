import './App.css';
import Routes from "./Routes";
import { Navbar, Nav }  from 'react-bootstrap'
import  { LinkContainer } from "react-router-bootstrap";
import React, { useState } from "react";
import { AppContext } from "./libs/contextLib";

function App() {
  
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
    userHasAuthenticated(false);
  }
    

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand className="font-weight-bold text-muted">
          Scratch
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
            <>
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated , userHasAuthenticated}}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
