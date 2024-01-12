import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <Link to={"/create-user"}>Add New User</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
