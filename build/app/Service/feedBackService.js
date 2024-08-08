"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feedback_1 = __importDefault(require("../Models/Feedback"));
const logger_1 = __importDefault(require("../Logger/logger"));
class FeedbackService {
    constructor() {
        this.feedbacks = [];
        this.feedbacks.push(new Feedback_1.default(1, 'Samsung', 1, 4, 'Good product'));
        this.feedbacks.push(new Feedback_1.default(2, 'Samsung', 1, 5, 'Excellent product'));
        this.feedbacks.push(new Feedback_1.default(3, 'Samsung', 1, 3, 'Average product'));
        this.feedbacks.push(new Feedback_1.default(4, 'Samsung', 1, 2, 'Not good product'));
        this.feedbacks.push(new Feedback_1.default(5, 'Samsung', 1, 1, 'Worst product'));
    }
    addFeedback(feedback) {
        logger_1.default.info('Function addFeedback started');
        this.feedbacks.push(feedback);
        logger_1.default.info('Function addFeedback Completed');
    }
    getFeedbackById(id) {
        logger_1.default.info('Function getFeedbackById started');
        return this.feedbacks.find(feedback => feedback.id === id);
        logger_1.default.info('Function getFeedbackById Completed');
    }
    // public getFeedbackByProductId(productId: number) {
    //     logger.info('Function getFeedbackByProductId started');
    //     return this.feedbacks.filter(feedback => feedback.productId === productId);
    //     logger.info('Function getFeedbackByProductId Completed');
    // }
    getFeedbackByProductName(productName) {
        logger_1.default.info('Function getFeedbackByProductName started');
        return this.feedbacks.filter(feedback => feedback.name === productName);
        logger_1.default.info('Function getFeedbackByProductName Completed');
    }
    avgRating(productName) {
        logger_1.default.info('Function avgRating started');
        let feedbacks = this.getFeedbackByProductName(productName);
        let totalRating = 0;
        feedbacks.forEach(feedback => {
            totalRating += feedback.rating;
        });
        return totalRating / feedbacks.length;
        logger_1.default.info('Function avgRating Completed');
    }
}
exports.default = FeedbackService;
