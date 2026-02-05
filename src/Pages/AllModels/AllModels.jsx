import axios from "axios";
import React, { useEffect, useState } from "react";
import ModelCard from "../../components/ModelCard";

const AllModels = () => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/all-models")
      .then((res) => {
        setModels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
