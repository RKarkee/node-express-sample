import AuthRoute from '@feature/auth/routes';
import { Router } from 'express';

const routes = Router();

routes.post('/auth', AuthRoute);

export default routes;
