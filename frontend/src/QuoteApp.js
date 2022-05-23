import {getByID} from "./ApiManager";
import React, {useState} from 'react';
import "./App.css"
export const QuoteApp = () => {
    const [result, setResult] = useState([])
    getByID(1).then(res => setResult(res) )
    return (
        <div>
            <div className="QuoteApp">
                <header className="App-header">
                    <p>
                        Service : quote-of-the-day.js
                    </p>
                </header>
            </div>
            <p>{JSON.stringify(result)}</p>
        </div>

    )
}

