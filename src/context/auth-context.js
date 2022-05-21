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

  const SignUpHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        ...params,
      });
      console.log(response);
      localStorage.setItem("ecom-token", response.data.encodedToken);
      dispatch({ type: "TOKEN_EXISTS" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const LoginHandler = async (params, cartDispatch) => {
    try {
      const response = await axios.post("/api/auth/login", { ...params });
      localStorage.setItem("ecom-token", response.data.encodedToken);
      console.log(response);
      dispatch({ type: "TOKEN_EXISTS" });
      updateUserCartDetails(
        cartDispatch,
        response.data.foundUser.cart,
        response.data.foundUser.wishlist
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const LogOutHandler = (cartDispatch) => {
    localStorage.removeItem("ecom-token");
    localStorage.removeItem("user");
    cartDispatch({ type: "RESET" });
    dispatch({ type: "TOKEN_REMOVED" });
    navigate("/");
  };

  const updateUserCartDetails = (cartDispatch, cart, wishlist) => {
    cartDispatch({
      type: "SET_CART",
      payload: { cart: cart, wishlist: wishlist },
    });
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
