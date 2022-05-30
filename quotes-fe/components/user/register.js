import {form, formGroup,header,input,btn,baseContainer} from "../../styles/user.module.css"

export default function Register() {
    return (
        <div className={baseContainer}>
            <div className={header}>Register</div>
            <div className={form}>
                <div className={formGroup}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" className={input}/>
                </div>
                <div className={formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="email" className={input}/>
                </div>
                <div className={formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" className={input}/>
                </div>
                <button type="button" className={btn}>
                    Login
                </button>
            </div>
            <div >

            </div>
        </div>
    );
}