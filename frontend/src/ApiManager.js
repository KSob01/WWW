import axios from "axios";

const baseURL = "http://localhost:8080"
// export const getAll = async () => {
//     const res = await fetch(baseURL + '/quotes');
//     const json = await res.json();
//     console.log(json);
//     return json;
// }
export const getByID = async (id) => {
    const res = await axios.get(baseURL + '/quote/' + id).catch(err => console.log(err.toJSON()))
    return res.data
}

