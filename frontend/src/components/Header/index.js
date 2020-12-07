import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import Button from "../Button";

import * as S from "./styles";
import { AuthContext } from "../../context/Auth";

export default function Header() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <S.Header>
      <S.Content>
        <Link to="/">
          <img src={logo} alt="Meetapp" />
        </Link>

        <div>
          <span>{user.name}</span>
          <Link to="/profile">My Profile</Link>
        </div>

        <Button type="button" onClick={signOut}>
          Logout
        </Button>
      </S.Content>
    </S.Header>
  );
}
