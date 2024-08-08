export default class Feedback {
    id: number;
    productId: number;
    rating: number;
    comment: string;
    constructor(id:number,productId:number, rating:number, comment:string) {
        this.id = id;
        this.productId = productId;
        this.rating = rating;
        this.comment = comment;
    }
}