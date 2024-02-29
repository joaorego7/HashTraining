import NavBar from "./components/NavBar";
import Post from "./components/Post";
import { Header } from "./components/Header";
import "./App.css";
import UserInfo from "./components/UserInfo";
import Burger from "./components/BurgerMenu";


function App() {
  return (
    <div>
    <Post></Post>
    <NavBar></NavBar> 
      
       <Header />
    </div>
  );
}

export default App;
