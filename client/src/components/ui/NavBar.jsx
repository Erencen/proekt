import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          {user.data && (
            <NavLink to="/my-xs" className="nav-link">
              My xs
            </NavLink>
          )}
          <NavLink className="nav-link" to={"/addcard"}>
            {" "}
            Добавить карту
          </NavLink>
        </Nav>
        <Link to={"/search/"}>
          <Button variant="outline-success">Search</Button>
        </Link>

        <Nav>
          {!user.data && (
            <>
              <NavLink to="/auth/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/auth/signup" className="nav-link">
                Sign Up
              </NavLink>
              <span className="nav-link">|</span>
            </>
          )}
          <span className="nav-link">
            {user.data ? user.data.name : "Гость"}
          </span>
          {user.data && (
            <span className="nav-link">
              <Button
                onClick={logoutHandler}
                variant="outline-danger"
                size="sm"
              >
                Logout
              </Button>
            </span>
          )}
        </Nav>
        {user.data && (
          <Link to={`/basket/${user.data.id}`} className="nav-link">
            <Icon.Trash size={24}/>
          </Link>
        )}
      </Container>
    </Navbar>
  );
}
