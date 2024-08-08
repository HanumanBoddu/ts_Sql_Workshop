import Feedback from "../Models/Feedback";
import logger from '../Logger/logger';
export default class FeedbackService {
    public feedbacks: Feedback[] = [];
    constructor() {
        this.feedbacks.push(new Feedback(1, 1, 4, 'Good product'));
        this.feedbacks.push(new Feedback(2, 1, 5, 'Excellent product'));
        this.feedbacks.push(new Feedback(3, 1, 3, 'Average product'));
        this.feedbacks.push(new Feedback(4, 1, 2, 'Not good product'));
        this.feedbacks.push(new Feedback(5, 1, 1, 'Worst product'));
    }
    public addFeedback(feedback: Feedback) {
        logger.info('Function addFeedback started');
        this.feedbacks.push(feedback);
        logger.info('Function addFeedback Completed');
    }
    public getFeedbackById(id: number) {
        logger.info('Function getFeedbackById started');
        return this.feedbacks.find(feedback => feedback.id === id);
        logger.info('Function getFeedbackById Completed');
    }
    public getFeedbackByProductId(productId: number) {
        logger.info('Function getFeedbackByProductId started');
        return this.feedbacks.filter(feedback => feedback.productId === productId);
        logger.info('Function getFeedbackByProductId Completed');
    }
    public avgRating(productId: number) {
        logger.info('Function avgRating started');
        let feedbacks = this.getFeedbackByProductId(productId);
        let totalRating = 0;
        feedbacks.forEach(feedback => {
            totalRating += feedback.rating;
        });
        return totalRating / feedbacks.length;
        logger.info('Function avgRating Completed');
    }
}