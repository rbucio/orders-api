import express from 'express';
import ordersController from '../controllers/orders';

const router = express.Router();

router.get('/orders', ordersController.all);
router.post('/orders', ordersController.save);
router.delete('/orders/:orderId', ordersController.delete)

export default router;







