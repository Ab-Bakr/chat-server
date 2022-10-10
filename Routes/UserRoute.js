import express from "express";
import {
  deleteUser,
  followUser,
  getUser,
  getUserId,
  unFollowUser,
  updateUser,
} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/id/:username", getUserId);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unFollowUser);
export default router;
