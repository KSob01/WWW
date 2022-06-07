import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
export default function UserPage() {
    // const { user, error, isLoading } = useUser();
    //
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;
    // if (!user) return <Link href="../login"><a>Login</a></Link>;
    return <div>Hello
        {/*{user.name}*/}
    </div>;
}