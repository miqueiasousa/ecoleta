import { Request, Response, NextFunction } from 'express'
import { HttpError } from 'http-errors'

export default function (error: HttpError, req: Request, res: Response, next: NextFunction) {
  return res
    .status(error.status || 500)
    .json({
      status: error.status,
      message: error.message
    })
}
