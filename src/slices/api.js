// export const url = "http://localhost:5000/api";
export const url = "https://backend-hkfn.onrender.com";
export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
