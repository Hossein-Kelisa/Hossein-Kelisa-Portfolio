import express from 'express';
import { sendMessage } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validateContact.js';

const router = express.Router();

router.post('/', validateContact, sendMessage);

export default router;