import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
 return (
  <section className="error">
   <Link to="/details">
    <h2>Details</h2>
   </Link>
  </section>
 );
};

export default Error;
