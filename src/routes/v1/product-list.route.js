const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productListValidation = require('../../validations/product-list.validation');
const ProductListController = require('../../controllers/product-list.controller');

const router = express.Router();

router
  .route('/')
  .post(
    auth('productListManagement'),
    validate(productListValidation.createProductList),
    ProductListController.createProductList
  )
  .get(
    auth('productListManagement'),
    validate(productListValidation.getProductLists),
    ProductListController.getProductLists
  );

router
  .route('/:id')
  .get(auth('productListManagement'), validate(productListValidation.getProductList), ProductListController.getProductList)
  .patch(
    auth('productListManagement'),
    validate(productListValidation.updateProductList),
    ProductListController.updateProductList
  )
  .delete(
    auth('productListManagement'),
    validate(productListValidation.deleteProductList),
    ProductListController.deleteProductList
  );

module.exports = router;
