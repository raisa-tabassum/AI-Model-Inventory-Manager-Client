import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model, id }) => {
  //   const { name, framework, useCase, image } = model;
  return (
    <div className="card bg-base-100 w-96 shadow-md rounded-xl">
      <figure className="h-52 overflow-hidden">
        <img
          className="w-full h-full p-4 rounded-3xl object-cover"
          src={model.image || model.imageURL}
          alt={model.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-primary">
          {model.name}
        </h2>
        <p className="text-gray-600">
          <span className="text-gray-600 font-semibold">Framework:</span>
          {model.framework}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-600 font-semibold">Use Case: </span>
          {model.useCase}
        </p>
        <div>
          <Link to={`/models/${id}`} className="btn btn-gradient w-full mt-1">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
