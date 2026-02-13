import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const AddModels = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const modelData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
      createdBy: user?.email,
      createdAt: new Date(),
    };

    await axiosInstance
      .post("/models", modelData)
      .then(() => {
        toast.success("AI Model added successfully");
        setLoading(false);
        navigate("/models");
      })
      .catch(() => {
        toast.error("Failed to add model");
        setLoading(false);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center my-10">
      <div className="w-full max-w-2xl bg-base-100 shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-header">
          Add New AI Model
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Model Name"
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          {/* Framework */}
          <div>
            <label className="label font-medium mb-2">Framework</label>
            <input
              type="text"
              name="framework"
              required
              placeholder="TensorFlow, PyTorch, etc."
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          {/* Use Case */}
          <div>
            <label className="label font-medium mb-2">Use Case</label>
            <input
              type="text"
              name="useCase"
              required
              placeholder="Use Case of model"
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          {/* Dataset */}
          <div>
            <label className="label font-medium mb-2">Dataset</label>
            <input
              type="text"
              name="dataset"
              required
              placeholder="Dataset used"
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          {/* Description */}
          <div>
            <label className="label font-medium mb-2">Description</label>
            <textarea
              name="description"
              required
              rows={4}
              placeholder="Describe the model"
              className="textarea w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          {/* Image URL */}
          <div>
            <label className="label font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              required
              placeholder="https://example.com/image.jpg"
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-full text-white mt-4 btn-gradient"
          >
            {loading ? "Adding..." : "Add Model"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModels;
