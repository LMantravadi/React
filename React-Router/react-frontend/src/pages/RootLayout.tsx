import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import React from "react";
export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
