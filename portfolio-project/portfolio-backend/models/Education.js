const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    institute: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ""
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Education", educationSchema);