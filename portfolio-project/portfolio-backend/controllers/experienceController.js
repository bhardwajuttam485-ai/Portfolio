const Experience = require("../models/Experience");

const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch experiences",
      error: error.message
    });
  }
};

const createExperience = async (req, res) => {
  try {
    const { year, role, text, order } = req.body;

    if (!year || !role || !text) {
      return res.status(400).json({
        message: "Year, role, and text are required"
      });
    }

    const experience = await Experience.create({
      year,
      role,
      text,
      order
    });

    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create experience",
      error: error.message
    });
  }
};

const updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json(updatedExperience);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update experience",
      error: error.message
    });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);

    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete experience",
      error: error.message
    });
  }
};

module.exports = {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience
};