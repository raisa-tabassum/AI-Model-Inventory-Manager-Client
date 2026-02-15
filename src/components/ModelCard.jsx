import React, { useState } from "react";
import { Link } from "react-router";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const ModelCard = ({ model, id }) => {
  //   const { name, framework, useCase, image } = model;
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = async () => {
    if (rating < 1 || rating > 5) return;
    try {
      const res = await axiosInstance.post(
        `/models/${id}/rate`,
        { rating },
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        },
      );
      toast.success(
        `Rating submitted! New average: ${res.data.averageRating.toFixed(1)}`,
      );
      setSubmitted(true);
    } catch (err) {
      console.log(err);
      toast.error("Error submitting rating!");
    }
  };
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
          <span className="text-gray-600 font-semibold">Framework: </span>
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
      {/* Rating UI */}
      {user && !submitted && (
        <div className="flex justify-between items-center px-6 pb-4">
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="select select-bordered rounded-lg text-primary font-bold border-[#237c83] w-1/2"
          >
            <option value={0}>Rate this model</option>
            <option value={1}>1 ⭐</option>
            <option value={2}>2 ⭐</option>
            <option value={3}>3 ⭐</option>
            <option value={4}>4 ⭐</option>
            <option value={5}>5 ⭐</option>
          </select>
          <button
            onClick={handleRating}
            className="btn btn-gradient w-1/2 mt-1"
          >
            Submit Rating
          </button>
        </div>
      )}
      {submitted && (
        <p className="text-primary text-3xl mb-6 font-semibold text-center">
          Thank you for rating!
        </p>
      )}
    </div>
  );
};

export default ModelCard;
