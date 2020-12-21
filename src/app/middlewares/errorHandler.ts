import { Request, Response, NextFunction } from 'express'
import { HttpError } from 'http-errors'

function errorHandler () {
  return function (error: HttpError, req: Request, res: Response, next: NextFunction) {
    const { statusCode, message } = error

    return res
      .status(statusCode)
      .json({ statusCode, message })
  }
}

export default errorHandler
