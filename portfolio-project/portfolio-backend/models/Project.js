const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    desc: {
      type: String,
      required: true
    },
    abstract: {
      type: String,
      default: ""
    },
    details: {
      type: String,
      default: ""
    },
    tags: [
      {
        type: String
      }
    ],
    image: {
      type: String,
      default: ""
    },
    liveLink: {
      type: String,
      default: ""
    },
    githubLink: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);