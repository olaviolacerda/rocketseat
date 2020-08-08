import { Router } from 'express';
import ClassesController from './controllers/classes';
import ConnectionsController from './controllers/connections';

const routes = Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;