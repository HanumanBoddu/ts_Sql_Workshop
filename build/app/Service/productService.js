"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../Logger/logger"));
const db_json_1 = __importDefault(require("../DB/db.json"));
class ProductService {
    constructor() {
        this.products = [];
        this.products = db_json_1.default.products;
        // this.products.push(new products(1, 'Samsung', 70000, 'Samsung with 8GB RAM and 128GB storage'));
        // this.products.push(new products(2, 'OnePlus', 35000, 'OnePlus with 8GB RAM and 128GB storage'));
        // this.products.push(new products(3, 'iPhone', 80000, 'iPhone with 8GB RAM and 128GB storage'));
        // this.products.push(new products(4, 'Google', 75000, 'Google with 8GB RAM and 128GB storage'));
        // this.products.push(new products(5, 'Oppo', 45000, 'Oppo with 8GB RAM and 128GB storage'));
        // this.products.push(new products(6, 'Vivo', 30000, 'Vivo with 8GB RAM and 128GB storage'));
        // this.products.push(new products(7, 'Redmi', 28000, 'Redmi with 8GB RAM and 128GB storage'));
        // this.products.push(new products(8, 'Realme', 30000, 'Realme with 8GB RAM and 128GB storage'));
        // this.products.push(new products(9, 'Asus', 28000, 'Asus with 8GB RAM and 128GB storage'));
        // this.products.push(new products(10, 'Nokia', 45000, 'Nokia with 8GB RAM and 128GB storage'));
        // this.products.push(new products(11, 'Motorola', 30000, 'Motorola with 8GB RAM and 128GB storage'));
    }
    addProduct(product) {
        logger_1.default.info('Function addProduct started');
        this.products.push(product);
        logger_1.default.info('Function addProduct Completed');
    }
    getProducts() {
        logger_1.default.info('Function getProducts started');
        return this.products;
        logger_1.default.info('Function getProducts Completed');
    }
}
exports.default = ProductService;
