import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import LoadingSpinner from "../Pages/LoadingSpinner/LoadingSpinner";

const FeaturedAiModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get("/featured-models")
      .then((res) => {
        setModels(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [axiosInstance]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="mt-18">
      <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-header text-shadow-md">
        Featured AI Models
      </h2>
      <div className="grid place-items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {models.map((model) => (
          <div className="card w-full h-[200px] bg-base-100 py-3 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold text-secondary">
                {model.name}
              </h2>
              <p className="text-primary text-xl font-semibold">
                {model.framework}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                {model.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAiModels;
