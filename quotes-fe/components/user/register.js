import {form, formGroup,header,input,btn,baseContainer} from "../../styles/user.module.css"
import {useState} from "react";

export default function Register() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [logged,setLogged ] = useState(false)

    function PostUser(log, pas) {
        fetch('http://localhost:8080/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "login":log,
                "password":pas
            })
        }).then(response => {
                console.log(response);
            })

        console.log(log, pas)

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
            <div >
            </div>
        </div>
    );
}