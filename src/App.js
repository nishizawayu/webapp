import Slider from './Slider';
import Headers from './Header';
import {
  BrowserRouter,
  Routes,
  Route,
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
  const handleChange = ()=>{
    console.log("テキスト")
  }

  return( 
    <>
      <h1>Weather</h1>
      <select name='place' id='place' onChange={handleChange}>
        <option value="tokyo">東京</option>
        <option value="osaka">大阪</option>
        <option value="sapporo">札幌</option>
      </select>
    </>
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
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headers />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<Weather />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
   </BrowserRouter>   
    </div>
    
  );
}

export default App;
