import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";

import {
  RecoilRoot,
} from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <AppRoutes />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
