import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requiresAuth = async function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = await jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = await this.db.users.findBy({ email: decodedToken.email });
    if (user) {
      return user._id;
    }
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

export const requiresAuthGetUser = async function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = await jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = await this.db.users.findBy({ email: decodedToken.email });
    if (user) {
      return user;
    }
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};
