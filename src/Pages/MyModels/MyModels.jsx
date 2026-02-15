import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyModels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    axiosSecure
      .get(`/my-models?email=${user.email}`)
      .then((res) => {
        setModels(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user, axiosSecure]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-header text-shadow-md mb-8 text-primary">
        My Models
      </h1>
      {models.length === 0 ? (
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-semibold">
          You haven't added any models yet.
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <div
              key={model._id}
              className="card bg-base-100 w-96 shadow-md rounded-xl"
            >
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
                  <span className="font-semibold">Framework: </span>
                  {model.framework}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Use Case: </span>
                  {model.useCase}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Created By: </span>
                  {model.createdBy}
                </p>
                <div>
                  <Link
                    to={`/models/${model._id}`}
                    className="btn btn-gradient w-full mt-1"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyModels;
