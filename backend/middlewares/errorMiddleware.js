import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "An unknown error occurred";
  res.status(statusCode).json({ message });
  next();
};
export default errorHandler;
