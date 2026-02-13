import React, { useEffect, useState } from "react";
import ModelCard from "../../components/ModelCard";
import useAxios from "../../hooks/useAxios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get("/models")
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
    <div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model._id} model={model} id={model._id}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
