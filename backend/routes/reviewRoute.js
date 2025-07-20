import express from 'express';
import { createReview, getReviewsByCompanyId } from '../controller/reviewController.js';

const router = express.Router();

router.post('/postreview', createReview);          // Route to create a new review   
router.get('/:companyId', getReviewsByCompanyId);  // Get reviews by company ID

export default router;