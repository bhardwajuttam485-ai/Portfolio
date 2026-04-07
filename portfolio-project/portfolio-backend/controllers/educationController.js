const Education = require("../models/Education");

const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json(educations);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch education records",
      error: error.message
    });
  }
};

const createEducation = async (req, res) => {
  try {
    const { year, degree, institute, text, order } = req.body;

    if (!year || !degree || !institute) {
      return res.status(400).json({
        message: "Year, degree, and institute are required"
      });
    }

    const education = await Education.create({
      year,
      degree,
      institute,
      text,
      order
    });

    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create education record",
      error: error.message
    });
  }
};

const updateEducation = async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedEducation) {
      return res.status(404).json({ message: "Education record not found" });
    }

    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update education record",
      error: error.message
    });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(req.params.id);

    if (!deletedEducation) {
      return res.status(404).json({ message: "Education record not found" });
    }

    res.status(200).json({ message: "Education record deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete education record",
      error: error.message
    });
  }
};

module.exports = {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation
};