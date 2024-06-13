import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { IoCreateOutline, IoLogOutOutline } from "react-icons/io5";

import "./navbar.css";
const NavBar = ({ username, setAuth, setShow }) => {
  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };
  return (
    
      <div className="nav-container">
        <h5 className={"nav-leftArea d-md-block d-none"}>
          Welcome, {username}
        </h5>
        <div className={"nav-rightArea"}>
          <div className="  d-md-none d-flex justify-content-evenly">
            <div className="nav-add-icon" onClick={() => setShow(true)}>
              <IoCreateOutline /> New Poll
            </div>
            <div className="nav-logout-icon" onClick={logout}>
              <IoLogOutOutline />
            </div>
          </div>

          <div className="d-md-block d-none">
            <Button
              variant="outline-info"
              className="nav-add-btn mx-2"
              onClick={() => setShow(true)}
            >
              Create New Poll
            </Button>
            <Button
              type="button"
              className="nav-logout-btn "
              variant="outline-danger"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    
  );
};

export default NavBar;
