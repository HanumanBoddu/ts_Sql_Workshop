"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("./app/Service/productService"));
const feedBackService_1 = __importDefault(require("./app/Service/feedBackService"));
let productService = new productService_1.default();
let feedbackService = new feedBackService_1.default();
console.log('Products:');
console.log(productService.getProducts());
console.log('Feedbacks of product 1:');
console.log(feedbackService.getFeedbackByProductId(1));
console.log('Average rating of product 1:');
console.log(feedbackService.avgRating(1));
