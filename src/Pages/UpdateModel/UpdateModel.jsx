import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const UpdateModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/models/${id}`)
      .then((res) => {
        setModel(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Failed to fetch model");
      });
  }, [id, axiosInstance]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const updatedData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    try {
      await axiosInstance.put(`/models/${id}`, updatedData, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      });
      toast.success("Model updated successfully!");
      navigate(`/models/${id}`);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update model");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex items-center justify-center my-10">
      <div className="w-full max-w-2xl bg-base-100 shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-header">
          Update AI Model
        </h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="label font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={model.name}
              required
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          <div>
            <label className="label font-medium mb-2">Framework</label>
            <input
              type="text"
              name="framework"
              defaultValue={model.framework}
              required
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          <div>
            <label className="label font-medium mb-2">Use Case</label>
            <input
              type="text"
              name="useCase"
              defaultValue={model.useCase}
              required
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          <div>
            <label className="label font-medium mb-2">Dataset</label>
            <input
              type="text"
              name="dataset"
              defaultValue={model.dataset}
              required
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          <div>
            <label className="label font-medium mb-2">Description</label>
            <textarea
              name="description"
              rows={4}
              defaultValue={model.description}
              required
              className="textarea w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          <div>
            <label className="label font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={model.image}
              required
              className="input w-full rounded-2xl focus:outline-gray-200"
            />
          </div>
          <button
            type="submit"
            disabled={updating}
            className="btn w-full text-white mt-4 btn-gradient"
          >
            {updating ? "Updating..." : "Update Model"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModel;
