import {form, formGroup, header, input, btn, baseContainer} from "../../styles/user.module.css"
import {useState} from "react";
import {decode as base64_decode, encode as base64_encode} from 'base-64';


export default function Login() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    function PostUser(log, pas) {
        fetch('http://localhost:8080/user/login', {
            headers: {
                'Authorization': 'Basic ' + base64_encode(log + ":" + pas)
            }
        }).then(function (response) {
            if (response.ok) {
                console.log('Fetch was successful', response);
                return response;
            } else {
                throw Error(response.statusText);
            }
        }).catch(function (err) {
            console.log('Fetch failed', err.response);
        });
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
            <button type="button" className={btn} onClick={() => {
                PostUser(login, password)
            }}>
                Login
            </button>
            <div>
            </div>
        </div>
    );
}