import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  getCurrentUser,
  getUserProfile,
  getUserPosts,
  followUser,
  unfollowUser,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.get(
  "/me",
  authMiddleware,
  getCurrentUser
);

router.put(
  "/update",
  authMiddleware,
  updateProfile
);

router.get(
  "/profile/:id",
  getUserProfile
);

router.get(
  "/posts/:id",
  getUserPosts
);

router.put(
  "/follow/:id",
  authMiddleware,
  followUser
);

router.put(
  "/unfollow/:id",
  authMiddleware,
  unfollowUser
);

export default router;