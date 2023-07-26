import { Router } from 'express';

import userController from '../controller/userController.js';
import checkToken from '../../../config/auth/checkToken.js';

const router = new Router();

router.post('/api/users/auth', userController.getAccessToken);

router.use(checkToken);
router.get('/api/users/email/:email', userController.findByEmail);


export default router;