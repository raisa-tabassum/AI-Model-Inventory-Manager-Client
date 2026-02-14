import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center text-gray-700">
        Oops! This AI model doesn't exist.
      </h2>
      <p className="text-md sm:text-xl md:text-2xl text-gray-500 mb-6 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-gradient">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
