import { Router } from 'express';
import TicketsController from './controllers/TicketsController';
import HostingController from './controllers/HostingController';
const routes = Router();

routes.post('/tickets', TicketsController.create);

routes.get('/tickets/', TicketsController.index);
routes.get('/tickets/:origin/:destination/:date', TicketsController.show);


routes.post('/hosting', HostingController.create);
routes.post('/hosting', HostingController.create);
export default routes;