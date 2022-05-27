export default function Login(){
    return(
        <form action="/send-data-here" method="post">
            <label htmlFor="roll">User Name</label>
            <input
                type="text"
                id="roll"
                name="userName"
                required
                minLength="8"
                maxLength="20"
            />
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="name" required/>
            <button type="submit">Submit</button>
        </form>
    )
}