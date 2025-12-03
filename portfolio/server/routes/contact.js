import express from "express";
import { sendMessage } from "../controller/contactController.js";
import { validateContact } from "../middleware/validateContact.js";
import { upload } from "../middleware/uploadFile.js";

const router = express.Router();

router.post("/", upload.single("attachment"), validateContact, sendMessage);

export default router;
