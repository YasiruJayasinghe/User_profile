import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <a href="/">Logo</a>
        <Link to={"/create-user"}>Add new user</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
