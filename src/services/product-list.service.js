const httpStatus = require('http-status');
const { ProductList } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a product list
 * @param {Object} productListBody
 * @returns {Promise<User>}
 */
const createProductList = async (productListBody, user) => {
  const payload = {
    ...productListBody,
    creator: user._id,
  };

  return ProductList.create(payload);
};

/**
 * Query for product list
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProductList = async (filter, options) => {
  const productLists = await ProductList.paginate(filter, options);
  return productLists;
};

/**
 * Get product list by id
 * @param {ObjectId} id
 * @returns {Promise<ProductList>}
 */
const getProductListById = async (id) => {
  return ProductList.findById(id);
};

/**
 * Update product list by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateProductListById = async (id, updateBody) => {
  const productList = await getProductListById(id);
  if (!productList) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product list not found');
  }
  Object.assign(productList, updateBody);
  await productList.save();
  return productList;
};

/**
 * Delete product list by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteProductListById = async (id) => {
  const prodcutList = await getProductListById(id);
  if (!prodcutList) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product list not found');
  }
  await prodcutList.remove();
  return prodcutList;
};

module.exports = {
  createProductList,
  queryProductList,
  getProductListById,
  updateProductListById,
  deleteProductListById,
};
