import React, { useEffect, useState } from "react";
import ModelCard from "../../components/ModelCard";
import useAxios from "../../hooks/useAxios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFrameWork, setSelectedFrameWork] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get("/models")
      .then((res) => {
        setModels(res.data);
        if (!selectedFrameWork) {
          setFilteredModels(res.data);
        } else {
          setFilteredModels(
            res.data.filter((model) => model.framework === selectedFrameWork),
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [axiosInstance, selectedFrameWork]);
  const frameworks = [...new Set(models.map((model) => model.framework))];
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div className="my-6 flex items-center gap-2">
        <label className="font-semibold text-primary text-xl sm:text-2xl md:text-3xl">
          Filter by Framework :
        </label>
        <select
          value={selectedFrameWork}
          onChange={(e) => setSelectedFrameWork(e.target.value)}
          className="select select-bordered border-[#40b9c2]"
        >
          <option value="">All</option>
          {frameworks.map((fw) => (
            <option key={fw} value={fw}>
              {fw}
            </option>
          ))}
        </select>
      </div>
      {filteredModels.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No models found for selected framework.
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredModels.map((model) => (
            <ModelCard key={model._id} model={model} id={model._id}></ModelCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllModels;
