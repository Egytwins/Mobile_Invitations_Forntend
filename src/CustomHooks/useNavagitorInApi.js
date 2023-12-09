// useApiWithNavigation.js
import { useNavigate } from "react-router-dom";

export function useApiWithNavigation() {
  const navigate = useNavigate();

  const handleUnauthorized = () => {
    // Handle unauthorized logic
    localStorage.removeItem("token");
    navigate("/");
  };

  return {
    handleUnauthorized,
    // other functions or values as needed
  };
}
