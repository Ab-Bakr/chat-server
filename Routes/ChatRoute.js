import express from "express";
import {
  createChat,
  userChat,
  findChat,
  deleteChat,
} from "../Controllers/ChatController.js";

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", userChat);
router.get("/find/:firstId/:secondId", findChat);
router.delete("/:id", deleteChat);

export default router;
