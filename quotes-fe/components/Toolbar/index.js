import Link from 'next/link';
import {navBar} from '../../styles/styles.module.css'
import Image from "next/image";
import {userImage,buttonNav} from "../../styles/styles.module.css"

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
                    <Link href="/quote-of-the-day">
                        <a className={buttonNav}>QUOTE OF THE DAY</a>
                    </Link>
                </li>
                <li>
                    <Link href="/my-quotes">
                        <a>
                            <Image src="/user-icon.png" alt="user" width="64" height="60"  className={userImage}/>
                        </a>

                    </Link>

                </li>
            </ul>
        </nav>


    )
}