
import './App.css'
import Boss from './boss.jsx';
import Messagebox from './Messagebox.jsx';
function Sunny() {
  let name = "Shrey Sethia";
  let object1 = { name: "Shrey", college: "VIT" };
  

  
    return (
      <>
        <h2>Name is : {name}</h2>
        <h1>Shrey Sethia</h1>
        <p>I am a good Boy</p>
        <p>My age is 22</p>
        <Messagebox
          message="Hello World"
          color="blue"
          features={[
            "Hindi","English","Sanskrit"
          ]}
          object1={object1}
          
        />
      </>
    );
   
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
