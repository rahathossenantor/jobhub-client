import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
