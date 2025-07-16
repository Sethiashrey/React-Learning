
import './App.css'
import Boss from './Boss.jsx';
function Sunny(){
  let name  = "Shrey Sethia";
  return(
    <>
       <h2>Name is : {name}</h2>
      <h1>Shrey Sethia</h1>
      <p>I am a good Boy</p>
      
    </>
  )
}

function App() {

  return (
    <>
      <Sunny />
      <Boss />
    </>
  )
}

export default App
