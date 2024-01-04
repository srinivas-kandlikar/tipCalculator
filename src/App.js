import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Tipcalc/>
    </div>
  );
}


function Tipcalc() {
  let[val,setVal] = useState(0);
  let [name, setName] = useState(0);

function Cardetails(e){
console.log(e.target.value);
setName(Number(e.target.value));
  return (
<>
</>
  )
}
  
function Reset(){
  setVal(0);
  setName(0);

  return(
    <>
 

    </>
  )

}


function Bill(e) {
  setVal(Number(e.target.value));
  console.log(val);


  return (

<>

</>
  )
}


  return (
    <>
  <p>how much was the bill?<input type="text"  value={val} onChange={Bill} placeholder='enter bill details'/></p>
  <p>how did you like the service ? 
    <select id="tips" name="tips"  value= {name} onChange={Cardetails}>
<option value = "0">Dissatisfied - 0</option>
<option value ="5"> Good - 5</option>
<option value ="10"> Very Good - 10</option>
<option value="20">20</option>
</select></p>

  <p>how did your friend like the service?<input type="text"/></p>

  <p>Value : {val}</p>
  <p>Service : {name}</p>

<p>total:{val+name}</p>
<button onClick={Reset}>Reset</button>
    </>

 )

}

export default App;
