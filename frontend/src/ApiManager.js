import {Component} from "react";
// import {api} from "./http-common";
// const basePath = 'api';
// let config = {
//     headers: {
//         'Content-Type': 'application/json',
//     }
// }

export class ApiManager extends Component {
    static myInstance = null;

    static getInstance() {
        return new ApiManager();
    }
    async getAll() {

        fetch(this.baseURL + '/quotes').then(
            response => {return response.json();}
        ).catch( error => {
            console.error(`fetch operation failed: ${error.message}`);
        });
    }
    async getByID (id){
        const headers = {'allowed-origin':'*'}
        fetch(this.baseURL +'/quote/'+id, { headers }).then(
            response => {return response.json();}
        ).catch( error => {
            console.error(`fetch operation failed: ${error.message}`);
        });
    }
}
export default ApiManager

