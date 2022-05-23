const baseURL = "http://localhost:8080"
export const getAll = async () => {
    const res = await fetch(baseURL + '/quotes');
    const json = await res.json();
    console.log(json);
    return json;
}
export const getByID = async (id) => {
    const res = await fetch(baseURL + '/quote/' + id);
    return await res.json();
}

