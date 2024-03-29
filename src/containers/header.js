import React from "react";
import { Header } from "../components";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
        <Header.Button />
      </Header.Frame>
      {children}
    </Header>
  );
}
