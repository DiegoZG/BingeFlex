import React from "react";
import { Header } from "../components";
import { Header } from "../components/accordion/styles/accordion";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
        <Header.Button />
      </Header.Frame>
    </Header>
  );
}
