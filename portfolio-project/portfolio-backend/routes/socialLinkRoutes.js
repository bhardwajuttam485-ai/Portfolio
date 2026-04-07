const express = require("express");
const {
  getSocialLinks,
  createSocialLink,
  updateSocialLink,
  deleteSocialLink
} = require("../controllers/socialLinkController");

const router = express.Router();

router.get("/", getSocialLinks);
router.post("/", createSocialLink);
router.put("/:id", updateSocialLink);
router.delete("/:id", deleteSocialLink);

module.exports = router;