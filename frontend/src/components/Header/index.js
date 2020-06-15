import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { StyledHeader, Content } from "./styles";
import { AuthContext } from "../../context/Auth";

export default function Header() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <StyledHeader>
      <Content>
        <Link to="/">
          <img src={logo} alt="Meetapp" />
        </Link>

        <div>
          <span>{user.name}</span>
          <Link to="/profile">My Profile</Link>
        </div>

        <button type="button" onClick={signOut}>
          Logout
        </button>
      </Content>
    </StyledHeader>
  );
}
