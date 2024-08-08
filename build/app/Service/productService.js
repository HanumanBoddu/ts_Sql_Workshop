"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../Models/product"));
class ProductService {
    constructor() {
        this.products = [];
        this.products.push(new product_1.default(1, 'Samsung', 70000, 'Samsung with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(2, 'OnePlus', 35000, 'OnePlus with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(3, 'iPhone', 80000, 'iPhone with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(4, 'Google', 75000, 'Google with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(5, 'Oppo', 45000, 'Oppo with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(6, 'Vivo', 30000, 'Vivo with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(7, 'Redmi', 28000, 'Redmi with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(8, 'Realme', 30000, 'Realme with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(9, 'Asus', 28000, 'Asus with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(10, 'Nokia', 45000, 'Nokia with 8GB RAM and 128GB storage'));
        this.products.push(new product_1.default(11, 'Motorola', 30000, 'Motorola with 8GB RAM and 128GB storage'));
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
    updateProduct(product) {
        let index = this.products.findIndex(p => p.id === product.id);
        this.products[index] = product;
    }
    deleteProduct(id) {
        let index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
    }
}
exports.default = ProductService;
