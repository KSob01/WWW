import Link from 'next/link';
import {navBar} from '../styles/styles.module.css'
import Image from "next/image";
import {userImage,buttonNav} from "../styles/styles.module.css"

export default function Toolbar() {
    return (
        <nav >
            <ul className={navBar}>
                <li >
                    <Link href="/" className={buttonNav}>
                        <a className={buttonNav}>HOME</a>
                    </Link>
                </li>
                <li >
                    <Link href="/all-quotes">
                        <a className={buttonNav}>ALL QUOTES</a>
                    </Link>
                </li>
                <li>
                    <Link href="/rand-quote">
                        <a className={buttonNav}>RANDOM QUOTE</a>
                    </Link>
                </li>
                <li>
                    <Link href="/my-quotes">
                        <a>
                            <Image src="/user-icon.png" alt="user" width="75%" height="75%"  className={userImage}/>
                        </a>

                    </Link>

                </li>
            </ul>
        </nav>


    )
}