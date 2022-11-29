import { Component } from "react";
import { Link, Outlet } from "react-router-dom";



 export class  Navbar extends Component {


  

render(){
    return <>

  
<nav className="navbar p-4  navbar-expand-lg ">
  <div className="container w-75">
  <Link className="navbar-brand fw-bold  me-3 text-white " to={"/Home"}>Start React</Link>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3   text-white" aria-current="page" to={"/PORTFOLIO"}>portfoilo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3   text-white" to={"/About"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 text-white" to={"/Contact"}>contact</Link>
        </li>
       
      </ul>
    
    </div>
   
    
  </div>
</nav>
   

</>

} 

 }