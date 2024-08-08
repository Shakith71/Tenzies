import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import React from "react"
import ReactDOM  from "react-dom"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

import JokesData from "./components/JokesData"
import Joking  from "./components/Joking"
export default function App(){
    const [tenzies, setTenzies] = React.useState(false)
    function allNewDice(){
        const newDice = []
        for (let i = 0;i<10;i++){
            newDice.push(generateNewDie()
            )
        }
        return newDice
    }
    
    const [dice, setDice] = React.useState(allNewDice())
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue){
            setTenzies(true)
            console.log("You Won!")
        }
        // setTenzies(liti)
    }, [dice])
    console.log(tenzies)
    const diceEl = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} id ={die.id} holdDice={holdDice}/>)
   function generateNewDie(){
    return{
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id:nanoid()
        
    }
   }
    function rollDice(){
        if(!tenzies){
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld?
            die: generateNewDie()
        }))
    }
    else{
        setTenzies(false)
        setDice(allNewDice())
    }
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id? {...die, isHeld : !die.isHeld} : die
        }))
    }
    return(
        <div className="main">
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze at its current value between rolls.</p>
            <div className="dice-container">
                {diceEl}
            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies?"New Game":"Roll"}</button>
        </div>
        
    )
}