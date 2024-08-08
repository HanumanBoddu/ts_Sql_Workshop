export default class Feedback {
    id: number;
    name: string;
    productId: number;
    rating: number;
    comment: string;
    constructor(id:number,name:string,productId:number, rating:number, comment:string) {
        this.id = id;
        this.name = name;
        this.productId = productId;
        this.rating = rating;
        this.comment = comment;
    }
}