import { Request, Response, NextFunction } from 'express'
import { HttpError } from 'http-errors'

function errorHandler () {
  return function (error: HttpError, req: Request, res: Response, next: NextFunction) {
    const { status, message } = error

    return res
      .status(status || 500)
      .json({ status, message })
  }
}

export default errorHandler
