import React from "react";
import { NavLink } from "react-router";

const EVENTS = [
  { id: 1, name: "Event 1" },
  { id: 2, name: "Event 2" },
  { id: 3, name: "Event 3" },
  { id: 4, name: "Event 4" },
];

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <NavLink to={event.id.toString()}>{event.name}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
