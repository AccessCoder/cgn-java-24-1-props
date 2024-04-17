import './App.css'
import Cat, {CatProps} from "./Cat.tsx";
import Login from "./Login.tsx";


function App() {

    let isLoggedIn = false;

    function handleLogin(){
        isLoggedIn = true
        console.log(isLoggedIn)
    }

    const data:CatProps[] = [
        {name:"Mietzi", url:"https://http.cat/images/200.jpg"},
        {name:"Mutzi", url:"https://http.cat/images/301.jpg"},
        {name:"BadKitti", url:"https://http.cat/images/400.jpg"}]

  return (
    <>
        <Login loginUser={handleLogin}/>
        {data.map((catelement:CatProps, index) => (
            <Cat name={catelement.name} url={catelement.url} key={index}/>
        ))}

    </>
  )
}

export default App
