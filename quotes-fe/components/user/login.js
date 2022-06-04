import {form, formGroup, header, input, btn, baseContainer} from "../../styles/user.module.css"
import {useState} from "react";
import {encode as base64_encode} from 'base-64';
import {errorInfo} from "../../styles/user.module.css"

export default function Login({loginStatus}) {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [logged, setLogged] = useState(loginStatus)
    const [triedLogin, setTriedLogin] = useState(false)

    function GetAuth(log, pas) {
        fetch('http://localhost:8080/user/login', {
            headers: {
                'Authorization': 'Basic ' + base64_encode(log + ":" + pas)
            }
        }).then(function (response) {
            if (response.ok) {
                console.log('Fetch was successful', response);
                setLogged(true);
                return response;
            } else {
                setLogged(false)
                throw Error(response.statusText);
            }
        }).catch((reason) =>
            // console.clear()
            console.log(reason)
        );
        setTriedLogin(true);

    }

    function AfterLogin() {
        if (triedLogin) {
            if (logged) {
                return (
                    <>
                    <h2>
                    Login successful
                </h2>
                </>)}
            else
                {
                    return (
                        <h2 className={errorInfo}>
                            Login unsuccessful
                        </h2>)
                }
            }
            return <></>
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
                    GetAuth(login, password)
                }}>
                    Login
                </button>
                <div>
                    {AfterLogin()}
                </div>

            </div>
        );
    }