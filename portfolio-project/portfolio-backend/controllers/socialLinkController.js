const SocialLink = require("../models/SocialLink");

const getSocialLinks = async (req, res) => {
  try {
    const socialLinks = await SocialLink.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json(socialLinks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch social links",
      error: error.message
    });
  }
};

const createSocialLink = async (req, res) => {
  try {
    const { name, icon, url, order } = req.body;

    if (!name || !icon || !url) {
      return res.status(400).json({
        message: "Name, icon, and url are required"
      });
    }

    const socialLink = await SocialLink.create({
      name,
      icon,
      url,
      order
    });

    res.status(201).json(socialLink);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create social link",
      error: error.message
    });
  }
};

const updateSocialLink = async (req, res) => {
  try {
    const updatedSocialLink = await SocialLink.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedSocialLink) {
      return res.status(404).json({ message: "Social link not found" });
    }

    res.status(200).json(updatedSocialLink);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update social link",
      error: error.message
    });
  }
};

const deleteSocialLink = async (req, res) => {
  try {
    const deletedSocialLink = await SocialLink.findByIdAndDelete(req.params.id);

    if (!deletedSocialLink) {
      return res.status(404).json({ message: "Social link not found" });
    }

    res.status(200).json({ message: "Social link deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete social link",
      error: error.message
    });
  }
};

module.exports = {
  getSocialLinks,
  createSocialLink,
  updateSocialLink,
  deleteSocialLink
};