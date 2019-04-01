const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DialCodeSchema = new Schema({
  country: {
    type: String,
    required: [true, "missing country"]
  },
  dial_code: {
    type: String
  }
});

DialCodeSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("DialCode", DialCodeSchema);
