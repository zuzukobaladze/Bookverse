import axios from 'axios';

export default class Search {
    constructor(query, field){
        this.query = query;
        this.field = field;
    }

    async getByField(){
        try {
            const res = await axios(`http://127.0.0.1:3000/api/v1/bookverse?${this.field}=${this.query}`);
            this.result = res.data.data.books
        } catch (error) {
            alert(error)
        }
    }

    async getAllBooks(){
        try {
            const res = await axios(`http://127.0.0.1:3000/api/v1/bookverse`);
            this.result = res.data.data.books
        } catch (error) {
            alert(error)
        }
    }
}