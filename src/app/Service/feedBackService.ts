import Feedback from "../Models/Feedback";

export class FeedbackService {
    public feedbacks: Feedback[] = [];
    constructor() {
        this.feedbacks.push(new Feedback(1, 1, 4, 'Good product'));
        this.feedbacks.push(new Feedback(2, 1, 5, 'Excellent product'));
        this.feedbacks.push(new Feedback(3, 1, 3, 'Average product'));
        this.feedbacks.push(new Feedback(4, 1, 2, 'Not good product'));
        this.feedbacks.push(new Feedback(5, 1, 1, 'Worst product'));
    }
    public addFeedback(feedback: Feedback) {
        this.feedbacks.push(feedback);
    }
    public getFeedbacks() {
        return this.feedbacks;
    }
    public getFeedbackById(id: number) {
        return this.feedbacks.find(feedback => feedback.id === id);
    }
    public updateFeedback(feedback: Feedback) {
        let index = this.feedbacks.findIndex(f => f.id === feedback.id);
        this.feedbacks[index] = feedback;
    }
    public deleteFeedback(id: number) {
        let index = this.feedbacks.findIndex(f => f.id === id);
        this.feedbacks.splice(index, 1);
    }
    public getFeedbackByProductId(productId: number) {
        return this.feedbacks.filter(feedback => feedback.productId === productId);
    }
    public avgRating(productId: number) {
        let feedbacks = this.getFeedbackByProductId(productId);
        let totalRating = 0;
        feedbacks.forEach(feedback => {
            totalRating += feedback.rating;
        });
        return totalRating / feedbacks.length;
    }
}