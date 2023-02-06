const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 50,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  agreeToTerms: {
    type: Boolean,
    default: false,
    required: true,
    validate: value => {
      if(!value) throw Error("You must agree to terms.")
    }
  },
});

module.exports = mongoose.model("Users", UserSchema);
