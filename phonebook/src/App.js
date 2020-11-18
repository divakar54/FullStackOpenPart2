import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import axios from 'axios'

const App = () => {

  const [ persons, setPersons ] = useState([])

  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')

  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
    })
  }, [])

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
        <p>filter shown with <input /></p>
      <h3>add a new number</h3>
        <PersonForm addName={addName} 
                    handleNameChange={handleNameChange} 
                    newName={newName} 
                    newNumber={newNumber} 
                    handleNumberChange={handleNumberChange} 
        />
      <h3>Numbers</h3>
        <Person persons={persons} />
    </div>
  )
}

export default App