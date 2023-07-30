import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Main from "./Main";
import Conteact from "./Conteact";
import { NavLink } from "react-bootstrap";
import "./Rounting.css";
const Rounting = (e:any) => {

  return (
    <>
      <BrowserRouter>
      <nav>
    <ul>
      <li><a href="/About">About</a></li>
      <li><a href="/Conteact">Contact</a></li>
      <li><a href="/Main">Main</a></li>
    </ul>
  </nav>
        <Routes>
          <Route path="/" element={<About></About>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Main" element={<Main></Main>}></Route>
          <Route path="/Conteact" element={<Conteact></Conteact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Rounting;
