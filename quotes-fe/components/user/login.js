import {form, formGroup, header, input, btn, baseContainer} from "../../styles/user.module.css"
import {useEffect, useState} from "react";
// import base64 from 'react-native-base64'
import {GetQuoteHTTP} from "../QuotesGet";



export default function Login() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    function PostUser(log, pas) {
        fetch('http://localhost:8080/users', {
            headers: {
                'Authorization': 'Basic bG9naTpwYXM='
            }
        })
            .then(response => {
                console.log("KAsia",response.json());
            })

        console.log(log, pas)

    }

    return (
        <div className={baseContainer}>
            <div className={header}>Login</div>
            <div className={form}>
                <div className={formGroup}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" className={input}
                           onChange={e => setLogin(e.target.value)}/>
                </div>
                <div className={formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" className={input}
                           onChange={e => setPassword(e.target.value)}/>
                </div>

            </div>
            <button type="button" className={btn} onClick={() => {PostUser(login, password)}}>
                Login
            </button>
            <div>
            </div>
        </div>
    );
}