import express from 'express';
import { createCompany , getAllCompanies} from '../controller/companyController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/create', upload.single('logo'), createCompany);  // Route to create a new company
router.get('/getall',getAllCompanies);

export default router;