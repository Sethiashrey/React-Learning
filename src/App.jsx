
import './App.css'
import Boss from './Boss.jsx';
import Messagebox from './Messagebox.jsx';
function Sunny(){
  let name  = "Shrey Sethia";
  return(
    <>
       <h2>Name is : {name}</h2>
      <h1>Shrey Sethia</h1>
      <p>I am a good Boy</p>
      <p>My age is 22</p>
      <Messagebox message="Hello World" color="blue" />
      
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
