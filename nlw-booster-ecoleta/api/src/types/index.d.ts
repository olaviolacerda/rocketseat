import { Application, Router } from 'express';
import Knex from 'knex';
import ItemController from '../core/controllers/item-controller';
import PointController from '../core/controllers/point-controller';

export type DbConnection = Knex;

export interface IRoute {
  register(router: Router): void;
}

export type ControllerContext = {
  itemController: ItemController;
  pointController: PointController;
}

export interface IHttpInterface {
  serve(): void;
  getApp(): Application;
}

export type MulterFile = Express.Multer.File;