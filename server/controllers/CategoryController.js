const CategoryModel = require('../models/Categories');
const dataRepository = require('../services/repositoryService');

module.exports.index = (req, res) => dataRepository.getAll(CategoryModel, res);

module.exports.subCategories = async ({params: { category }}, res) => await dataRepository.find(CategoryModel, res, { category });

module.exports.store = async ({body: {name, category}}, res) => 
    await dataRepository.store(new CategoryModel({name, category}), res);

module.exports.details = async ({params: { id }}, res) => await dataRepository.findById(CategoryModel, res, id);

module.exports.update = async ({body: {name, category}, params: { id }}, res) => 
    await dataRepository.store(CategoryModel, res, id, {name, category});

module.exports.destroy = async ({params: { id }}, res) => await dataRepository.delete(CategoryModel, res, id);

