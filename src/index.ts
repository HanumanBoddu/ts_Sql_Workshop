import  ProductService from './app/Service/productService';
import  FeedbackService from './app/Service/feedBackService';
import  Feedback from './app/Models/Feedback';
import Product from './app/Models/product';

let productService = new ProductService();
let feedbackService = new FeedbackService();

console.log('Products:');
console.log(productService.getProducts());

console.log('Feedbacks of product Samsung:');
console.log(feedbackService.getFeedbackByProductName('Samsung'));

console.log('Average rating of product Samsung:');
console.log(feedbackService.avgRating('Samsung'));

feedbackService.addFeedback(new Feedback(6, 'Motorola', 11, 4, 'Good product'));
feedbackService.addFeedback(new Feedback(7, 'Motorola', 11, 5, 'Excellent product'));

console.log('Feedbacks of product Motorola:');
console.log(feedbackService.getFeedbackByProductName('Motorola'));

console.log('Average rating of product Motorola:');
console.log(feedbackService.avgRating('Motorola'));



