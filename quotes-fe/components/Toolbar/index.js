import Link from 'next/link';
import {navBar} from '../../styles/styles.module.css'
import Image from "next/image";
import {userImage} from "../../styles/styles.module.css"
export default function Toolbar() {
    return (
        <nav >
            <ul className={navBar}>
                <li >
                    <Link href="/" >
                        <a >HOME</a>
                    </Link>
                </li>
                <li >
                    <Link href="/all-quotes">
                        <a>ALL QUOTES</a>
                    </Link>
                </li>
                <li >
                    <Link href="/quote-of-the-day">
                        <a >QUOTE OF THE DAY</a>
                    </Link>
                </li>
                <li>
                    <Link href="/my-quotes">
                        <Image src="/user-icon.png" alt="me" width="64" height="60"  className={userImage}/>
                    </Link>

                </li>
            </ul>
        </nav>


    )
}