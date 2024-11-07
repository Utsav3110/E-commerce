import express from 'express';

import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from '../controllers/product.controller.js';
import upload from '../middleware/multer.middleware.js';
import adminAuth from '../middleware/admin.auth.js';

const productRouter = express.Router();

productRouter.post(
  '/add',
  upload.fields([
    {
      name: 'image1',
      maxCount: 1,
    },
    {
      name: 'image2',
      maxCount: 1,
    },
    {
      name: 'image3',
      maxCount: 1,
    },
    {
      name: 'image4',
      maxCount: 1,
    },
  ]),
  adminAuth,
  addProduct
);
productRouter.post('/remove', adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProducts);

export default productRouter;