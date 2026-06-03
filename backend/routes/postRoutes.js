import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

import {
  createPost,
  getPosts,
  getPostById,
  toggleLikePost,
  addComment,
  deletePost,
  deleteComment,
  getUserPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);

router.get(
  "/user/:userId",
  getUserPosts
);

router.get("/:id", getPostById);

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createPost
);

router.put(
  "/:id/like",
  authMiddleware,
  toggleLikePost
);

router.post(
  "/:id/comment",
  authMiddleware,
  addComment
);

router.delete(
  "/:id",
  authMiddleware,
  deletePost
);

router.delete(
  "/:postId/comment/:commentId",
  authMiddleware,
  deleteComment
);

export default router;