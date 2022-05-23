import {getByID} from "./ApiManager";
import React, {Component, useEffect} from 'react';

export default class QuoteApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultArr: []
        }
    }

    callApi() {
        getByID(1).then((result) => {
            this.setState({resultArr: result});
        }).catch((err) => console.log(err));
    }

    render() {
        this.callApi()
        return (
            <div>
                <div className="QuoteApp">
                    <header className="App-header">
                        <p>
                            Service : quote-of-the-day.js
                        </p>
                    </header>
                </div>
                <p>{JSON.stringify(this.state.resultArr)}</p>
            </div>

        )
    }
}