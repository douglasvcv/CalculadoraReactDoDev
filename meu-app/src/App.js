import {useState} from 'react'
import './App.css';

function App() {
 const [firstNum, setFirstNum] = useState(document.querySelector('#Num1'))
 const [secondNum, setSecondNum] = useState(document.querySelector('#Num2'))
 const [resu, setResu] = useState()

const soma = ()=>{
  let sum = firstNum + secondNum
  setResu(sum)
 
}
const subtraçao = ()=>{
  let sub = firstNum - secondNum
  setResu(sub)
}
const multiplicaçao = ()=>{
  let mult = firstNum * secondNum
  setResu(mult)
 
}
const divisao = ()=>{
  let div = firstNum / secondNum
  setResu(div)
 
}
  return (
    <div>
      <input type='number' id='Num1' value={firstNum} onChange={(e)=>{setFirstNum(Number(e.target.value))}} ></input>
      <input type='number' id='Num2' value={secondNum} onChange={(e=>{setSecondNum(Number(e.target.value))})}></input>
      <button onClick={soma}>+</button>
      <button onClick={subtraçao}>-</button>
      <button onClick={multiplicaçao}>*</button>
      <button onClick={divisao}>/</button>

      <span id='resultado' >Resultado: {resu}</span>
    </div>
  )
}

export default App;
