import { JSX, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [navigate, accessToken, location]);

  return children;
};

export default ProtectedRoute;
