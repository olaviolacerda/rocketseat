import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import morgan from 'morgan';
import path from 'path';
import { ControllerContext, IHttpInterface, IRoute } from '../../types';
import { expressLogger, logger } from '../../utils/logger';
import { ItemRoute, PointRoute } from './routes';

export class HttpInterface implements IHttpInterface {
  private app?: Application;
  private readonly controllerContext: ControllerContext;

  constructor(controllerContext: ControllerContext) {
    this.controllerContext = controllerContext;
  }

  getApp(): Application {
    if (!this.app) {
      throw new Error('Http server doesn\'t started');
    }
    return this.app;
  }

  private loadRoutes(): IRoute[] {
    return [
      new ItemRoute(this.controllerContext.itemController),
      new PointRoute(this.controllerContext.pointController),
    ];
  }

  serve(): void {
    if (this.app) {
      return;
    }

    /* Express initialization */
    const app = express();

    /* Express utilites */
    app.use(cors());
    app.use(bodyParser.json());
    app.use(expressLogger);
    app.use(morgan('dev'));

    /* Status endpoint */
    app.get(
      ['/info', '/status'],
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          res.sendStatus(httpStatusCodes.NO_CONTENT);
        } catch (err) {
          next(err);
        }
      },
    );

    /* Load application routes */
    this.loadRoutes()
      .forEach((route: IRoute) => {
        route.register(app);
      });

    /* Uploads Static Endpoint */
    app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', '..', 'uploads')))

    /* Not Found */
    app.use(
      '*',
      (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.sendStatus(httpStatusCodes.NOT_FOUND);
      },
    );

    /** Celebrate validations */
    app.use(errors());

    app.listen(3333);
    logger.info('HTTP server started in port 3333');

    this.app = app;
  }
}
