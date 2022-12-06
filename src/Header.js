import logo from './img/icon23.png';
import {
    Link, Outlet,
   } from "react-router-dom";
import Footers from './Footer';
function Headers(){
    return (
    <>
    
        <div>
        
        <header className="App-header">
    
            <h1><img src={logo} className="App-logo" alt="logo" /></h1>
            <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
        </nav>
        <hr />
        </header>

        <hr />
        <Outlet />
        <Footers/>
    </div>
    </>
    )
    }
    export default Headers;