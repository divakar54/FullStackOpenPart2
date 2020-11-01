import React, { useState } from 'react'
import Names from './components/Names'
const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '657434' 
    }
  ])

  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')
  
  const addName=(event)=>{
    event.preventDefault()
    const res = persons.find((n)=>n.name===newName)
    if(res===undefined){
      console.log("running inside if")
      const newNameObject={
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newNameObject))
    }
    else{
      console.log("running inside else")
      alert(`${newName} already in the phonebook`)
    }
    
  }

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div> name: <input onChange={handleNameChange} value={newName} /></div>
        <div> number: <input onChange={handleNumberChange} value={newNumber} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map( (n) => <Names key={n.name} name={n.name} number={n.number}/>)}
      </div>
    </div>
  )
}

export default App