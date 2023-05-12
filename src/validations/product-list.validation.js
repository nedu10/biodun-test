const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProductList = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    amount: Joi.number().required(),
  }),
};

const getProductLists = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProductList = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateProductList = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      amount: Joi.number(),
    })
    .min(1),
};

const deleteProductList = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProductList,
  getProductLists,
  getProductList,
  updateProductList,
  deleteProductList,
};
