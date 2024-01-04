import {useState} from 'react'
import './App.css';

function App() {
const [number1, setNumber1] = useState(document.querySelector('#num1'))
const [number2, setNumber2] = useState(document.querySelector('#num2'))
const [resu, setResu] = useState()


const soma = ()=>{
  let soma = number1 + number2
  setResu(soma)
  
}
const subtracao = ()=>{
  let sub = number1 - number2
  setResu(sub)
}
const multiplicacao = ()=>{
  let mult = number1 * number2
  setResu(mult)
}

const divisao = ()=>{
  let div = number1 / number2
  setResu(div)
}

return(
  <>
  <input type='number' value={number1} onChange={(e)=>{setNumber1(Number(e.target.value))}} placeholder='Write the first value' id='num1'></input>
  <input type='number' value={number2} onChange={(e)=>{setNumber2(Number(e.target.value))}} placeholder='Write the second value' id='num2'></input>
  <button onClick={soma}>+</button>
  <button onClick={subtracao}>-</button>
  <button onClick={multiplicacao}>*</button>
  <button onClick={divisao}>/</button>
  <div id='resu'>O resultado é: {resu} </div>
  </>
)
}

export default App;
