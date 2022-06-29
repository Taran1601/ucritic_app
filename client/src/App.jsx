import React from "react";
import Topbar from "./Components/topbar/TopBar";
import Contact from "./Components/contact/Contact";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={ <Homepage />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        <Route path="/posts"  element={ <Homepage />}>
        </Route>
        <Route path="/register" element={user ? <Homepage />: <Register />}>
          
        </Route>
        <Route path="/login" element={user ? <Homepage /> : <Login />}></Route>
        <Route path="/post/:id" element={ <Single />}>
         </Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

