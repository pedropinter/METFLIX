import { Router } from 'express';
import { MoviesController } from '../controller/moviesController';

const routes = Router();
const moviesController = new MoviesController();

routes.get('/movies', moviesController.list);
routes.post('/movies', moviesController.create);
routes.get('/movies/:id', moviesController.show);
routes.put('/movies/:id', moviesController.update);
routes.delete('/movies/:id', moviesController.delete);

export default routes;