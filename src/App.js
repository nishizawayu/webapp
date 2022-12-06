import logo from './logo.svg';
import './App.css';
import Slider from './Slider';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
 } from "react-router-dom";
 
function Home(){
  return(
    <>
    <h1>Home</h1> 
    
    <Slider/>
    </> 
  )
}
function Weather(){
  return(
    <h1>Weather</h1>
  )
}
function Dashboard(){
  return(
    <h1>Dashboard</h1>
  )
}
function NoMatch(){
  return(
    <h1>NotMatch</h1>
  )
}
 
 function Navigation() {
  return (
    <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
    </nav>
 );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<Weather />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
   </BrowserRouter>

        <header className="App-header">
    
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        <hr />
        <Outlet />
    </div>
    
  );
}

export default App;
