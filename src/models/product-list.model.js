const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productListSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: false,
    },
    amount: {
      type: String,
      required: true,
      default: 0,
    },
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productListSchema.plugin(toJSON);
productListSchema.plugin(paginate);

/**
 * @typedef ProductList
 */
const ProductList = mongoose.model('ProductList', productListSchema);

module.exports = ProductList;
