const Skill = require("../models/Skill");

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    return res.status(200).json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error.message);
    return res.status(500).json({ message: "Failed to fetch skills", error: error.message });
  }
};

const createSkill = async (req, res) => {
  try {
    const { title, text, icon } = req.body;

    if (!title || !text) {
      return res.status(400).json({ message: "Title and text are required" });
    }

    const skill = await Skill.create({
      title,
      text,
      icon
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: "Failed to create skill", error: error.message });
  }
};

const updateSkill = async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(500).json({ message: "Failed to update skill", error: error.message });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);

    if (!deletedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete skill", error: error.message });
  }
};

module.exports = {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill
};