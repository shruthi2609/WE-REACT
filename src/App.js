import TodoComponent from "./Components/TodoComponent";
import LifeCycleMethods from "./Components/LifeCycleMethods";
import TodoAPI from "./Components/TodoAPI";
import UnsplashAPI from "./Components/UnsplashAPI";
import HookEg from "./Components/HooksEg";
import CounterHooks from "./Components/CounterHooks";
import NewsAppHooks from "./Components/NewsAppHooks";
import HooksLifeCycle from "./Components/HooksLifeCycle";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import NewsAppAlgolia from "./Components/NewsAppAlgolia";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App() {
  return (
<div>
 <Router>
   <nav>
     <Link to="/todo">TodoAPI</Link>
     <Link to="/imagesearch">UnsplashAPI</Link>
   </nav>
   <Routes>
     <Route path="/todo" element={
       <TodoAPI></TodoAPI>
     }></Route>
     <Route path="/imagesearch" element={
       <UnsplashAPI></UnsplashAPI>
     }></Route>
   </Routes>
 </Router>
</div>
);
}

export default App;