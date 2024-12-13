import React from "react";
import EventsNavigation from "../components/EventNavigation";
import { Outlet } from "react-router-dom";
export default function EventRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
