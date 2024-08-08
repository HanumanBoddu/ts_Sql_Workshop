import Feedback from "../Models/Feedback";
import logger from '../Logger/logger';
export default class FeedbackService {
    public feedbacks: Feedback[] = [];
    constructor() {
        this.feedbacks.push(new Feedback(1, 'Samsung',1, 4, 'Good product'));
        this.feedbacks.push(new Feedback(2,'Samsung', 1, 5, 'Excellent product'));
        this.feedbacks.push(new Feedback(3, 'Samsung',1, 3, 'Average product'));
        this.feedbacks.push(new Feedback(4,'Samsung', 1, 2, 'Not good product'));
        this.feedbacks.push(new Feedback(5, 'Samsung',1, 1, 'Worst product'));
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
    // public getFeedbackByProductId(productId: number) {
    //     logger.info('Function getFeedbackByProductId started');
    //     return this.feedbacks.filter(feedback => feedback.productId === productId);
    //     logger.info('Function getFeedbackByProductId Completed');
    // }
    public getFeedbackByProductName(productName: string) {
        logger.info('Function getFeedbackByProductName started');
        return this.feedbacks.filter(feedback => feedback.name === productName);
        logger.info('Function getFeedbackByProductName Completed');
    }

    public avgRating(productName: string) {
        logger.info('Function avgRating started');
        let feedbacks = this.getFeedbackByProductName(productName);
        let totalRating = 0;
        feedbacks.forEach(feedback => {
            totalRating += feedback.rating;
        });
        return totalRating / feedbacks.length;
        logger.info('Function avgRating Completed');
    }
}