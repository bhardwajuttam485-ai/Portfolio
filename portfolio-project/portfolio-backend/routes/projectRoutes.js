const express = require("express");
const {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;