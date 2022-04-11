import { Request, Response, NextFunction } from "express";
import HttpException from "./http-exception";

/**
 * Global error handler middleware
 * @param error 
 * @param request 
 * @param response 
 * @param next 
 */
export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;
  response.status(status).send({
      status,
      message: error.message || "",
      data: null
  });
};