import {Component} from "react";

export class ApiManager extends Component {
    static myInstance = null;
    baseURL = "http://localhost:8080"
    static getInstance() {
        return new ApiManager();
    }
    async getAll() {
        const res = await fetch(this.baseURL + '/quotes');
        const json = await res.json();
        console.log(json);
        return json;
    }
    async getByID (id){
        const res = await fetch(this.baseURL +'/quote/'+id);
        return  await res.json();

    }
}
export default ApiManager

