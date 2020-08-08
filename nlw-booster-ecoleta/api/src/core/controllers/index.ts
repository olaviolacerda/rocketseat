import { ControllerContext } from '../../types';
import { dbConnection } from '../../utils/knex';
import ItemController from './item/item-controller';
import PointController from './point/point-controller';

const sqliteConnection = dbConnection();

export const controllerContext = (): ControllerContext => {
  const itemController = new ItemController(sqliteConnection);
  const pointController = new PointController(sqliteConnection);

  return {
    itemController,
    pointController,
  };
};
