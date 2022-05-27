import {useEffect, useState} from "react";

export function GetQuoteHTTP(path) {
    const baseURL = `http://localhost:8080${path}`
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(baseURL)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [baseURL])
    return data
}

