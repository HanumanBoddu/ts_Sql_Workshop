import logger from '../Logger/logger';
import products from '../Models/product';

export default class ProductService {
   public products: products[] = [];
    constructor() {
        this.products.push(new products(1, 'Samsung', 70000, 'Samsung with 8GB RAM and 128GB storage'));
        this.products.push(new products(2, 'OnePlus', 35000, 'OnePlus with 8GB RAM and 128GB storage'));
        this.products.push(new products(3, 'iPhone', 80000, 'iPhone with 8GB RAM and 128GB storage'));
        this.products.push(new products(4, 'Google', 75000, 'Google with 8GB RAM and 128GB storage'));
        this.products.push(new products(5, 'Oppo', 45000, 'Oppo with 8GB RAM and 128GB storage'));
        this.products.push(new products(6, 'Vivo', 30000, 'Vivo with 8GB RAM and 128GB storage'));
        this.products.push(new products(7, 'Redmi', 28000, 'Redmi with 8GB RAM and 128GB storage'));
        this.products.push(new products(8, 'Realme', 30000, 'Realme with 8GB RAM and 128GB storage'));
        this.products.push(new products(9, 'Asus', 28000, 'Asus with 8GB RAM and 128GB storage'));
        this.products.push(new products(10, 'Nokia', 45000, 'Nokia with 8GB RAM and 128GB storage'));
        this.products.push(new products(11, 'Motorola', 30000, 'Motorola with 8GB RAM and 128GB storage'));
    }
    public addProduct(product: products) {
        logger.info('Function addProduct started');
        this.products.push(product);
        logger.info('Function addProduct Completed');
    }
    public getProducts() {
        logger.info('Function getProducts started');
        return this.products;
        logger.info('Function getProducts Completed');
    }
}