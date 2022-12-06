

function headers(){
    return (
    <>
    
        <div>
            <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
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
    </>
    )
    }
    export default headers;