import { Request, Response, NextFunction } from 'express';

export class HttpExpress {
    public static wrapAsync(fn: (req: Request, res: Response, next?: NextFunction) => any) {
        return function (req: Request, res: Response, next?: NextFunction) {
            fn(req, res, next).catch(next);
        };
    }
}
