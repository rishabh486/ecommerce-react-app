import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate, requiresAuthGetUser } from "../utils/authUtils";
const sign = require("jwt-encode");
/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, email, password}
 * */

export const signupHandler = async function (schema, request) {
  const { email, password, ...rest } = JSON.parse(request.requestBody);
  // console.log(request.requestBody);
  try {
    // check if email already exists
    const foundUser = await schema.users.findBy({ email });
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ["Unprocessable Entity. Email Already Exists."],
        }
      );
    }
    const _id = uuid();
    const newUser = {
      _id,
      email,
      password,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      ...rest,
      cart: [],
      wishlist: [],
    };
    const createdUser = await schema.users.create(newUser);
    const encodedToken = await sign(
      { _id, email },
      process.env.REACT_APP_JWT_SECRET
    );
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {email, password}
 * */

export const loginHandler = async function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  console.log(request.requestBody);
  try {
    const foundUser = await schema.users.findBy({ email });
    if (!foundUser) {
      return new Response(
        404,
        {},
        { errors: ["The email you entered is not Registered. Not Found error"] }
      );
    }
    if (password === foundUser.password) {
      const encodedToken = sign(
        { _id: foundUser._id, email },
        process.env.REACT_APP_JWT_SECRET
      );
      foundUser.password = undefined;
      return new Response(200, {}, { foundUser, encodedToken });
    }
    new Response(
      401,
      {},
      {
        errors: [
          "The credentials you entered are invalid. Unauthorized access error.",
        ],
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const getCurrentUserHandler = async function (schema, request) {
  const user = await requiresAuthGetUser.call(this, request);
  try {
    if (!user) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }

    return new Response(200, {}, { user: user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
