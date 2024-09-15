import { useRecoilState } from "recoil";

import { authState } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const Navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log(auth.isAuthenticated);
    const isTokenExpired = (token: string) =>
      Date.now() >= JSON.parse(atob(token.split(".")[1])).exp * 1000;
    if (!token || auth.isAuthenticated === false || isTokenExpired(token)) {
      localStorage.removeItem("token");
      setAuth({ isAuthenticated: false });
      Navigate("/signin");
    }
  }, []);
  return <>{children}</>;
};

export default ProtectedRoute;
