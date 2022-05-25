import {useEffect, useState} from "react";

export function GetQuoteHTTP({path}) {
    const baseURL = `http://localhost:8080${path}`
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(baseURL)
            .then(res => res.json())
            .then(res => {
                if (res[0]) {
                    setData(res)
                } else {
                    setData([res])
                }
                setLoading(false)
            })
    }, [baseURL])

    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No data</p>

    // return (
    //     <>
    //         {data.map((val, i) => <p key={i}>{val['quote']}</p>)}
    //         {/*{JSON.stringify(newData)}*/}
    //     </>
    // )
    return data
}

