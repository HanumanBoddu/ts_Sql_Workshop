import logger from '../Logger/logger';
import products from '../Models/product';
import db from '../DB/db.json';

export default class ProductService {
   public products: products[] = [];
    constructor() {
        this.products = db.products;
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