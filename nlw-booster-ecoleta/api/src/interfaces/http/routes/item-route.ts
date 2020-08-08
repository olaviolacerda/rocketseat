import { Request, Response, Router } from 'express';
import httpStatusCodes from 'http-status-codes';
import ItemController from '../../../core/controllers/item/item-controller';
import { IRoute } from '../../../types';
import { logger } from '../../../utils/logger';

export class ItemRoute implements IRoute {
  constructor(private readonly itemController: ItemController) { }

  register(router: Router): void {
    router
      .get('/items', this.listItems.bind(this));
  }

  async listItems(req: Request, res: Response) {
    try {
      const items = await this.itemController.list();

      return res.status(httpStatusCodes.OK).send(items);
    } catch (error) {
      logger.error(error);
      return res.status(httpStatusCodes.BAD_REQUEST).send(error);
    }
  }
}
