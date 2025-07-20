import {review} from '../models/reviewModel.js';
import TryCatch from '../middleware/TryCatch.js';

// Create a new review
export const createReview = TryCatch(async (req, res) => {
    console.log(req.body);
    const {companyId, rating, likes} = req.body;

    const newReview = {
        companyId: req.body.companyId,
        fullName: req.body.fullName,
        subject: req.body.subject,
        reviewText:req.body.reviewText,
        rating: parseInt(rating),
        likes: req.body.likes ? parseInt(likes) : 0,
        createdAt: new Date()
    };

    const result = await review.create(newReview);

    return res.status(201).json({
        msg: "Review created successfully",
        review: result
    });
});

// Get all reviews for a specific company
export const getReviewsByCompanyId = TryCatch(async (req, res) => {
    const { companyId } = req.params;

    if (!companyId) {
        return res.status(400).json({
            msg: "Company ID is required"
        });
    }

    const reviews = await review.find({ companyId }).sort({ createdAt: -1 });

    const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = reviews.length ? (totalRating / reviews.length).toFixed(1) : 0;

    return res.status(200).json({
        msg: "Reviews fetched successfully",
        avgRating: parseFloat(avgRating),
        totalReviews: reviews.length,
        reviews
    });
});