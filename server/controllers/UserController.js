const UserModel = require('../models/Users');
const dataRepository = require('../services/repositoryService');

module.exports.index = async (req, res) => await dataRepository.getAll(UserModel, res);

module.exports.store = async ({body: {name, category, agreeToTerms}}, res) => 
    await dataRepository.store(new UserModel({name, category, agreeToTerms}), res);

module.exports.details = async ({params: { id }}, res) => await dataRepository.findById(UserModel, res, id);

module.exports.update = async ({body: {id, name, category, agreeToTerms}}, res) => 
    await dataRepository.update(UserModel, res, id, {name, category, agreeToTerms});

module.exports.destroy = async ({params: { id }}, res) => await dataRepository.delete(UserModel, res, id);

