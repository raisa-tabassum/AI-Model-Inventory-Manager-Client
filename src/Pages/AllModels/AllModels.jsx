import React, { useEffect, useState } from "react";
import ModelCard from "../../components/ModelCard";
import useAxios from "../../hooks/useAxios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFramework, setSelectedFramework] = useState("All");
  const [searchText, setSearchText] = useState("");
  const axiosInstance = useAxios();

  const fetchModels = async (search = "", framework = "All") => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/models", {
        params: {
          search,
          framework,
        },
      });
      setModels(res.data);
      setFilteredModels(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchModels(searchText, selectedFramework);
  }, [selectedFramework]);

  const frameworks = [
    "All",
    ...new Set(models.map((model) => model.framework)),
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearchText(value);
    fetchModels(value, selectedFramework);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold text-header mb-4 text-shadow-md">
        All Models
      </h1>
      <p className="text-gray-500 text-center sm:text-lg md:text-2xl hover:text-gray-600 leading-relaxed mb-8">
        Explore AI models
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex gap-2 justify-center">
          <label className="input flex flex-row-reverse items-center border-[#40b9c2]">
            <svg
              className="h-[1em] opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn btn-gradient">
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
        {/* Filter */}
        <div className="my-6 flex items-center gap-4 justify-center">
          <label className="font-semibold text-primary text-lg sm:text-xl md:text-2xl">
            Filter by Framework
          </label>
          <select
            value={selectedFramework}
            onChange={(e) => setSelectedFramework(e.target.value)}
            className="select select-bordered border-[#40b9c2] text-primary font-semibold"
          >
            {frameworks.map((fw) => (
              <option key={fw} value={fw}>
                {fw}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Models Grid */}
      {filteredModels.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No models found.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredModels.map((model) => (
            <ModelCard key={model._id} model={model} id={model._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllModels;
