"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Feedback {
    constructor(id, productId, rating, comment) {
        this.id = id;
        this.productId = productId;
        this.rating = rating;
        this.comment = comment;
    }
}
exports.default = Feedback;
