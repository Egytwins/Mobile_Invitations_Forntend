import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://api.example.com", // Replace with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    // Modify the request config here (e.g., add headers, authentication tokens)
    const accessToken = localStorage.getItem("token");

    // ** If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers)
        config.headers.authorization = "Bearer " + accessToken;
    }
    return config;
  },
  (error: any) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: any) => {
    // Modify the response data here (e.g., parse, transform)

    return response;
  },
  (error: any) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);

export default axiosInstance;
