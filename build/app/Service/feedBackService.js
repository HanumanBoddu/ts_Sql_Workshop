"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feedback_1 = __importDefault(require("../Models/Feedback"));
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
        this.feedbacks.push(feedback);
    }
    getFeedbacks() {
        return this.feedbacks;
    }
    getFeedbackById(id) {
        return this.feedbacks.find(feedback => feedback.id === id);
    }
    updateFeedback(feedback) {
        let index = this.feedbacks.findIndex(f => f.id === feedback.id);
        this.feedbacks[index] = feedback;
    }
    deleteFeedback(id) {
        let index = this.feedbacks.findIndex(f => f.id === id);
        this.feedbacks.splice(index, 1);
    }
    getFeedbackByProductId(productId) {
        return this.feedbacks.filter(feedback => feedback.productId === productId);
    }
    avgRating(productId) {
        let feedbacks = this.getFeedbackByProductId(productId);
        let totalRating = 0;
        feedbacks.forEach(feedback => {
            totalRating += feedback.rating;
        });
        return totalRating / feedbacks.length;
    }
}
exports.default = FeedbackService;
