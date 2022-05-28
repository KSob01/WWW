import Link from 'next/link';

export default function ToolbarWithLinks() {
    return (
        <ul>
            <li>
                <Link href="./">
                    <a>HOME</a>
                </Link>
            </li>
            <li>
                <Link href="./all-quotes">
                    <a>ALL QUOTES</a>
                </Link>
            </li>
            <li>
                <Link href="./quote-of-the-day">
                    <a>QUOTE OF THE DAY</a>
                </Link>
            </li>
        </ul>

    )
}