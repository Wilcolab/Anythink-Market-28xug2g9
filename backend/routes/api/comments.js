/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
   * GET /
   * Retrieves all comments from the database, sorted by creation date (descending).
   * @route GET /api/comments
   * @group Comments - Operations about comments
   * @returns {Array.<Comment>} 200 - An array of comment objects
   * @returns {object} 500 - Internal server error
   */
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * @route DELETE /api/comments/{id}
    * @group Comments - Operations about comments
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {object} 200 - Success message
    * @returns {object} 404 - Comment not found
    * @returns {object} 500 - Internal server error
    */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;