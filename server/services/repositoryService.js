module.exports.getAll = async (model, res) => {
  try {
    const records = await model.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.store = async (model, res) => {
  try {
    const record = await model.save();
    res.json({message: 'Data saved sucessfully', record});
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return res.status(400).send(errors);
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports.findById = async (model, res, id) => {
  try {
    const record = await model.findById(id);
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.find = async (model, res, query) => {
  try {
    const records = await model.find(query);
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.update = async (model, res, id, data = {}) => {
  const options = { new: true };
  try {
    const record = await model.findByIdAndUpdate(id, data, options);
    res.json({message: 'Data updated sucessfully', record});
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return res.status(400).send(errors);
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports.delete = async (model, res, id) => {
  try {
    const record = await model.findByIdAndDelete(id);
    res.json({ message: "Record deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
