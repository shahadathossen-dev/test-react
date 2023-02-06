const mongoose = require("mongoose");
 
const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is a required field"],
    max: 20,
    trim: true,
    validate: value => {
      // if(value.length > 5) throw Error("Name max length reached")
    },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
});

module.exports = mongoose.model("Categories", CategorySchema);
