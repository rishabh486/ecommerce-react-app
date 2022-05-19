import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [tokenExists, setTokenExists] = useState(
    localStorage.getItem("ecom-token")
  );

  const SignUpHandler = () => {
    async (params) => {
      try {
        const response = await axios.post("/api/auth/signup", {
          params,
        });
        localStorage.setItem("ecom-token", response.data.encodedToken);
        localStorage.setItem("user", response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
  };

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", params);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
    } catch (error) {
      console.log(error);
    }
  };

  const LogOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ tokenExists, user, LoginHandler, SignUpHandler, LogOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
