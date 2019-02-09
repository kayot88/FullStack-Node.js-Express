const Order = require('../models/Order');
const errorHandler = require('../utils/errorHandler');
exports.getAll = async (req, res) => {
  const query = {
    user: req.user.id
  };

  if (req.query.start) {
    query.date = {
      $gte: req.query.start
    }
  };

  if (req.query.end) {
    if (!query.date) {
      query.date={}
    };
    query.date['$lte'] =req.query.end;

  };
  if (req.query.order) {
    query.order = +req.query.order
  }


  try {
    const orders = await Order
    .find(query)
    .sort({date: -1})
    .skip(+req.query.offset)
    .limit(+req.query.limit)
    res.status(200).json(orders)
  } catch (error) {
    errorHandler(res, error)
  }
};
exports.create = async (req, res) => {
  try {
    const lastOrder = Order
      .findOne({
        user: req.user.id
      })
      .sort({
        date: -1
      })
    const maxOrder = lastOrder ? lastOrder.order : 0;
    const order = await new Order({
      user: req.user.id,
      list: req.body.list,
      order: maxOrder + 1,
    }).save()
    res.status(200).json(order);
  } catch (error) {
    errorHandler(res, error)
  }
}; 