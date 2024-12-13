import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event Id: {params.eventId}</p>
      <NavLink to="../events">Back</NavLink>
    </>
  );
}
