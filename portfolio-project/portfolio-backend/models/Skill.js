const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "✦"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Skill", skillSchema);