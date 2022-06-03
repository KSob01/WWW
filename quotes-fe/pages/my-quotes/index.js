import Login from "../../components/user/login";
import Register from "../../components/user/register";
import {useState} from "react";

export default function UserPage() {
    const [logStatus, setLogStatus] = useState(false)

    function viewLogPage() {
        if (!logStatus) {
            return (
                <>
                    <Login loginStatus={logStatus}/>
                    <Register/>
                </>
            )
        } else {
            return <h1>USER DATA</h1>
        }
    }

    return (<>
            {viewLogPage()}

        </>
    )
}