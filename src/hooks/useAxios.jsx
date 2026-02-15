import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "https://ai-model-inventory-server-peach.vercel.app/",
  });
  return axiosInstance;
};

export default useAxios;
