import ApiManager from "./ApiManager";
import React, { Component } from 'react';




export default class QuoteApp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            resultArr: []
        }
    }
    callApi() {
        ApiManager.getInstance().getByID(1).then((result) => {
            this.setState({ resultArr: result });
        });
    }
render() {
    this.callApi()
    return (
        <div>
            <div className="QuoteApp">
                <header className="App-header">
                    <p>
                        Service  : quote-of-the-day.js
                    </p>
                </header>
            </div>
                <p>{JSON.stringify(this.state.resultArr)}</p>
        </div>

)}
}