import {form, formGroup,header,input,btn,baseContainer} from "../../styles/user.module.css"
import {useState} from "react";

export default function Register() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
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
                <button type="button" className={btn}>
                    Sign up
                </button>
            </div>
            <div >
            </div>
        </div>
    );
}