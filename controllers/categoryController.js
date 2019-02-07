const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

exports.getAll = async (req, res) => {
  try {
    const category = await Category.find({
      user: req.user.id
    })
    res.status(200).json(category);
  } catch (error) {
    errorHandler(res, error)
  }
};
exports.getById = async (req, res) => {
  try {
    const category = await Category.findById({
      _id: req.params.id,
    });
    res.status(200).json(category)
  } catch (error) {
    errorHandler(res, error)
  }
};
exports.remove = async (req, res) => {
  try {
  await Category.remove({
    _id: req.params.id
  });
  await Position.remove({
    category: req.params.id
  });
  res.status(200).json({
    message: 'category deleted'
  })
  } catch (error) {
    errorHandler(res, error)
  }
};
exports.create = async (req, res) => {
  try {
    const category = await new Category({
      name: req.body.name,
      user: req.user.id,
      imageSrc: req.file ? req.file.path : ''
    }).save()
    res.status(201).json(category)
  } catch (error) {
    errorHandler(res, error)
  }
};

exports.update = async (req, res) => {
  const updated = {
    name: req.body.name
  };
  if (req.file) {
    updated.imageSrc = req.file.path 
  }

  try {
    const category = await Category.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: updated
    }, {
      new: true
    });
    res.status(200).json(category)
  } catch (error) {
    errorHandler(res, error)
  }
};