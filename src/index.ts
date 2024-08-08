import  ProductService from './app/Service/productService';
import  FeedbackService from './app/Service/feedBackService';
import  Feedback from './app/Models/Feedback';

let productService = new ProductService();
let feedbackService = new FeedbackService();

console.log('Products:');
console.log(productService.getProducts());

console.log('Feedbacks of product 1:');
console.log(feedbackService.getFeedbackByProductId(1));

console.log('Average rating of product 1:');
console.log(feedbackService.avgRating(1));

feedbackService.addFeedback(new Feedback(6, 2, 4, 'Good product'));

console.log('Feedbacks of product 2:');
console.log(feedbackService.getFeedbackByProductId(2));

console.log('Average rating of product 2:');
console.log(feedbackService.avgRating(2));



