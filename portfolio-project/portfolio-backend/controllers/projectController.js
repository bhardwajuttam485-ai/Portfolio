const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch projects",
      error: error.message
    });
  }
};

const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch project",
      error: error.message
    });
  }
};

const createProject = async (req, res) => {
  try {
    const {
      title,
      slug,
      desc,
      abstract,
      details,
      tags,
      image,
      liveLink,
      githubLink
    } = req.body;

    if (!title || !slug || !desc) {
      return res.status(400).json({
        message: "Title, slug and description are required"
      });
    }

    const project = await Project.create({
      title,
      slug,
      desc,
      abstract,
      details,
      tags,
      image,
      liveLink,
      githubLink
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create project",
      error: error.message
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update project",
      error: error.message
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete project",
      error: error.message
    });
  }
};

module.exports = {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
};