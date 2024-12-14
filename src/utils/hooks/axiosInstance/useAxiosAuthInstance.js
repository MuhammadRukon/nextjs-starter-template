import axios from "axios";

function useAxiosAuthInstance() {
  const axiosAuthInstance = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_BACKEND_URL + "api/customerApp/public/auth/",
  });

  return axiosAuthInstance;
}

export default useAxiosAuthInstance;
