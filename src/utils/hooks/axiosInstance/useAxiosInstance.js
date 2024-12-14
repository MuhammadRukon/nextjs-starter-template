import axios from "axios";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";

function useAxiosInstance() {
  const { user } = useContext(AuthContext);

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL:
          process.env.NEXT_PUBLIC_BACKEND_URL + "api/customerApp/protected/",
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      }),
    [user]
  );
  return axiosInstance;
}

export default useAxiosInstance;
