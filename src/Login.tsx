
type loginProps={
    loginUser: () => void
}
export default function Login(props:loginProps){



    return(
        <button onClick={props.loginUser}>Login</button>
    )
}