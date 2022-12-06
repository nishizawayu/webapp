
import {
    Link, Outlet,
   } from "react-router-dom";
function Footers(){
    return (
        <>
        <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/dashboard">dashboard</Link></li>
            </ul>
        </nav>
      </div>
        <p><small/>&copy; コピーライト</p>
        </>
    )
}
export default Footers;