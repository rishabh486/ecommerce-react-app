import axios from "axios";
import { createContext, useState, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducers/reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(authReducer, {
    tokenExists: false,
  });

  const SignUpHandler = () => {
    async (params) => {
      try {
        const response = await axios.post("/api/auth/signup", {
          ...params,
        });
        localStorage.setItem("ecom-token", response.data.encodedToken);
        localStorage.setItem("user", response.data.user);
        dispatch({ type: "TOKEN_EXISTS" });
      } catch (error) {
        console.log(error);
      }
    };
  };

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", { ...params });
      localStorage.setItem("ecom-token", response.data.encodedToken);
      // localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      console.log(response);
      dispatch({ type: "TOKEN_EXISTS" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const LogOutHandler = () => {
    localStorage.removeItem("ecom-token");
    localStorage.removeItem("user");
    dispatch({ type: "TOKEN_REMOVED" });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        LoginHandler,
        SignUpHandler,
        LogOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
