import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
