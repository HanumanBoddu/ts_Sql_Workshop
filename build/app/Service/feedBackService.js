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
        this.feedbacks.push(new Feedback_1.default(1, 1, 4, 'Good product'));
        this.feedbacks.push(new Feedback_1.default(2, 1, 5, 'Excellent product'));
        this.feedbacks.push(new Feedback_1.default(3, 1, 3, 'Average product'));
        this.feedbacks.push(new Feedback_1.default(4, 1, 2, 'Not good product'));
        this.feedbacks.push(new Feedback_1.default(5, 1, 1, 'Worst product'));
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
    getFeedbackByProductId(productId) {
        logger_1.default.info('Function getFeedbackByProductId started');
        return this.feedbacks.filter(feedback => feedback.productId === productId);
        logger_1.default.info('Function getFeedbackByProductId Completed');
    }
    avgRating(productId) {
        logger_1.default.info('Function avgRating started');
        let feedbacks = this.getFeedbackByProductId(productId);
        let totalRating = 0;
        feedbacks.forEach(feedback => {
            totalRating += feedback.rating;
        });
        return totalRating / feedbacks.length;
        logger_1.default.info('Function avgRating Completed');
    }
}
exports.default = FeedbackService;
