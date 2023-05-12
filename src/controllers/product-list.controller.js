const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productListService } = require('../services');

const createProductList = catchAsync(async (req, res) => {
  const product = await productListService.createProductList(req.body, req.user);
  res.status(httpStatus.CREATED).send(product);
});

const getProductLists = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await productListService.queryProductList(filter, options);
  res.send(result);
});

const getProductList = catchAsync(async (req, res) => {
  const user = await productListService.getProductListById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateProductList = catchAsync(async (req, res) => {
  const productList = await productListService.updateproductListsById(req.params.id, req.body);
  res.send(productList);
});

const deleteProductList = catchAsync(async (req, res) => {
  await productListService.deleteProductListById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProductList,
  getProductLists,
  getProductList,
  updateProductList,
  deleteProductList,
};
