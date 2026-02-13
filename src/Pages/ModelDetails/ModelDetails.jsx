import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link, useNavigate, useParams } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const ModelDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const axiosInstance = useAxios();
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
      });
  }, [id, axiosInstance, refetch]);

  const isCreator = user?.email === model?.createdBy;

  // console.log("User Email:", user?.email);
  // console.log("Model createdBy:", model?.created_by);

  const handlePurchase = async () => {
    try {
      const purchaseData = {
        name: model.name,
        description: model.description,
        framework: model.framework,
        createdBy: user.email,
        createdAt: new Date().toLocaleDateString(),
      };

      await axiosInstance.post(`/purchase/${model._id}`, purchaseData, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      });
      toast.success("Successfully Purchased!");
      setModel((prev) => ({
        ...prev,
        purchased: (prev.purchased || 0) + 1,
      }));

      setRefetch(!refetch);
    } catch (error) {
      toast.error("Purchase Failed!");
    }
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/models/${model._id}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      });
      toast.success("Model Deleted Successfully!");
      navigate("/models");
    } catch (error) {
      toast.error("Delete Failed!");
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={model.image}
              alt={model.name}
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            {/* Title */}
            <h1 className="text-3xl md:text-6xl font-bold text-primary">
              {model.name}
            </h1>
            <div>
              <div className="flex flex-wrap gap-2">
                {/* Framework */}
                <div className="badge badge-sm md:badge-lg badge-outline text-primary border-[#267a80] font-medium">
                  {model.framework}
                </div>
                {/* Use Case */}
                <div className="badge badge-sm md:badge-lg badge-outline text-primary border-[#267a80] font-medium">
                  {model.useCase}
                </div>

                {/* Purchase */}
                <div className="badge badge-sm md:badge-lg badge-outline text-primary border-[#267a80] font-medium">
                  Purchased:
                  <span className="font-bold">{model.purchased || 0}</span>
                </div>
              </div>

              {/* Dataset */}
              <p className="text-md text-secondary font-medium mt-4">
                {model.dataset}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {model.description}
            </p>

            {/* Created By */}
            <p className="text-sm text-gray-500">
              Created By: {model.createdBy}
            </p>

            {/* Created At */}
            <p className="text-sm text-gray-500">
              Created At: {new Date(model.createdAt).toLocaleDateString()}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <button onClick={handlePurchase} className="btn btn-gradient">
                Purchase
              </button>
              {isCreator && (
                <Link
                  to={`/update-model/${model._id}`}
                  className="btn btn-gradient"
                >
                  Edit
                </Link>
              )}
              {isCreator && (
                <button
                  onClick={handleDelete}
                  className="btn btn-outline rounded-xl text-primary font-semibold border-gray-300 hover:border-[#267a80] hover:bg-gray-50"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
