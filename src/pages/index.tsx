import React, { useState, useEffect, createContext } from "react";
import LoginPage from "./Login";
import TaskView from "./TaskView";
import { Routes, Route, useNavigate } from "react-router-dom";
import { storageService } from "../services/storageService";

export const authCtx = createContext<any>(null);

const BasePage: React.FC<{}> = () => {
  let navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<any>(null);

  useEffect(() => {
    let isAuthenticated = storageService.getTokens();
    setAuthenticated(isAuthenticated);
  }, []);

  useEffect(() => {
    switch (Boolean(authenticated)) {
      case true:
        navigate("/");
        break;
      case false:
        navigate("/login");
        break;
      default:
        navigate("/login");
        break;
    }
  }, [authenticated, navigate]);

  return (
    <authCtx.Provider value={{ authenticated, setAuthenticated }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<TaskView />} />
      </Routes>
    </authCtx.Provider>
  );
};

export default BasePage;
