import {form, formGroup, header, input, btn, baseContainer, errorInfo} from "../../styles/user.module.css"
import {useState} from "react";

export default function Register() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [logged, setLogged] = useState(false)
    const [triedLogin, setTriedLogin] = useState(false)

    function AfterRegistration() {
        if (triedLogin) {
            if (logged) {
                return (
                    <>
                        <h2>
                            Registration successful
                        </h2>
                    </>)
            } else {
                return (
                    <h2 className={errorInfo}>
                        Registration unsuccessful
                    </h2>)
            }
        }
        return <></>
    }

    function PostUser(log, pas) {
        fetch('http://localhost:8080/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "login": log,
                "password": pas
            })
        }).then(function (response) {
            if (response.ok) {
                console.log('Fetch was successful', response);
                setLogged(true);
                return response;
            } else {
                setLogged(false)
                throw Error(response.statusText);
            }
        }).catch(function (err) {
            // console.log('Fetch failed', err.response);
            console.clear()
        });
        setTriedLogin(true);

    }

    return (
        <div className={baseContainer}>
            <div className={header}>Register</div>
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
                <button type="button" className={btn} onClick={() => {
                    PostUser(login, password)
                }}>
                    Sign up
                </button>
            </div>
            {AfterRegistration()}
        </div>
    );
}