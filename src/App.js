import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { Route,Routes } from "react-router-dom";
import Task from "./Pages/Task/Task";
function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
      <Route path='/task' element={<Task/>}/>
     </Routes>
       
    </div>
  );
}

export default App;
