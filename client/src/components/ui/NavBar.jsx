import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import '../ui/NavBar.css';

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink className="nav-link" to={"/addcard"}>
            Добавить карту
          </NavLink>
        </Nav>
        <Link to={"/search/"}>
          <Button className="search-button" size="sm">Поиск</Button>
        </Link>

        <Nav className="align-items-center">
          {!user.data && (
            <>
              <NavLink to="/auth/login" className="nav-link">
                Войти
              </NavLink>
              <NavLink to="/auth/signup" className="nav-link">
                Зарегистрироваться
              </NavLink>
              <span className="nav-link">|</span>
            </>
          )}
          <span className="nav-link user-name">
            {user.data ? user.data.name : "Гость"}
          </span>
          {user.data && (
            <>
              <Button
                onClick={logoutHandler}
                variant="outline-danger"
                size="sm" 
                className="logout-button"
              >
                Выйти
              </Button>
              <span className="nav-link">|</span>
            </>
          )}
        </Nav>
        {user.data && (
          <Link to={`/basket/${user.data.id}`} className="nav-link">
            <Icon.Basket size={26} />
          </Link>
        )}
      </Container>
    </Navbar>
  );
}