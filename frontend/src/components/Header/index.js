import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { StyledHeader, Content } from "./styles";

export default function Header() {
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

        <button type="button">Logout</button>
      </Content>
    </StyledHeader>
  );
}
