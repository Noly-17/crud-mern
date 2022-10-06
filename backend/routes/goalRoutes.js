import express from 'express';

// Controllers
import { getGoals, addGoals, updateGoals, deleteGoals } from '../controllers/goalController.js';

// router declaration
const router = express.Router()

// endpoints
 router.get('/', getGoals)

 router.post('/', addGoals)

 router.put('/:id', updateGoals)

 router.delete('/:id', deleteGoals)


export default router   