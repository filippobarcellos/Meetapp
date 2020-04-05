import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signOut } from "../../store/modules/Auth/actions";

import logo from "../../assets/logo.svg";

import { StyledHeader, Content } from "./styles";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Content>
        <Link to="/">
          <img src={logo} alt="Meetapp" />
        </Link>

        <div>
          <span>Filippo Barcellos</span>
          <Link to="/">My Profile</Link>
        </div>

        <button type="button" onClick={() => dispatch(signOut())}>
          Logout
        </button>
      </Content>
    </StyledHeader>
  );
}
