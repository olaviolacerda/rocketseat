import { Request, Response, Router } from 'express';
import httpStatusCodes from 'http-status-codes';
import PointController from '../../../core/controllers/point/point-controller';
import { IRoute } from '../../../types';
import { logger } from '../../../utils/logger';
import { uploadMiddleware, validatorMiddleware } from '../middlewares';
import { createPointSchema } from '../validators';

export class PointRoute implements IRoute {
  constructor(private readonly pointController: PointController) { }

  register(router: Router): void {

    router
      .post('/points',
        uploadMiddleware.single('image'),
        validatorMiddleware(createPointSchema),
        this.createPoint.bind(this))
      .get('/points/:id', this.getPointById.bind(this))
      .get('/points', this.getPoints.bind(this));
  }

  async createPoint(req: Request, res: Response) {
    try {
      const point = await this.pointController.create({
        ...req.body,
        image: req.file?.filename,
      });

      return res.status(httpStatusCodes.CREATED).send(point);
    } catch (error) {
      logger.error(error);
      return res.status(httpStatusCodes.BAD_REQUEST).send(error);
    }
  }

  async getPointById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const point = await this.pointController.getById(Number(id));

      return res.status(httpStatusCodes.OK).send(point);
    } catch (error) {
      logger.error(error);
      return res.status(httpStatusCodes.NOT_FOUND).send(error);
    }
  }

  async getPoints(req: Request, res: Response) {
    try {
      const { city, uf, items } = req.query;

      const parsedItems = String(items)
        .split(',')
        .map((item) => Number(item.trim()));

      const parsedParams = {
        city: String(city),
        uf: String(uf),
        items: parsedItems,
      };

      const points = await this.pointController.list(parsedParams);

      return res.status(httpStatusCodes.OK).send(points);
    } catch (error) {
      logger.error(error);
      return res.status(httpStatusCodes.NOT_FOUND).send(error);
    }
  }
}
