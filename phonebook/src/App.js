import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
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