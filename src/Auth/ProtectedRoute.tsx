import { useRecoilValue } from "recoil";

import { authState } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const Navigate = useNavigate();
  const auth = useRecoilValue(authState);
  useEffect(() => {
    console.log(auth.isAuthenticated)
    if (auth.isAuthenticated===false)     Navigate("/signin");
  }, []);
  return <>{children}</>;
};

export default ProtectedRoute;        



