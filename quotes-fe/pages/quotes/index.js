import {useEffect, useState} from "react";

export default function Quotes() {
    const baseURL = "http://localhost:8080"
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(baseURL + '/quote/1')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>

    return (
        <div>
            <div>
                <header>
                    <p>
                        Service : quote-of-the-day.js
                    </p>
                </header>
            </div>
            <p>{JSON.stringify(data)}</p>
        </div>

    )
}
