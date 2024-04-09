

import express from 'express';
import { getStaff, test, updateStaff, deleteStaff } from '../controllers/staff.controller.js';

const router = express.Router();

router.get('/', test);
router.get('/all', getStaff);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

export default router;
