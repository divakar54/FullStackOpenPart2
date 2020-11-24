import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import comObject from './services/comms'

const App = () => {

  const [ persons, setPersons ] = useState([])

  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')

  useEffect(()=>{
    comObject
    .getAll()
    .then(response=>{
      setPersons(response.data)
    })
  }, [])

  const addName=(event)=>{
    event.preventDefault()
    const res = persons.find((n)=>n.name===newName)
    if(res===undefined){
      const newNameObject={
        name: newName,
        number: newNumber
      }
      comObject
          .postAll(newNameObject)
          .then(response => {
            setPersons(persons.concat(response.data))
          })
    }
    else{
      alert(`${newName} already in the phonebook`)
    }
    
  }

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }
  const deletePerson = (id, name)=>{
        if(window.confirm(`Delete ${name}?`)){
          comObject
                  .removeAll(id)
                  .then(()=>{
                    setPersons(persons.filter(p => p.id!==id))
                    console.log(newName)
                  })
        }
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
        <Person persons={persons} removePerson={deletePerson}/>
    </div>
  )
}

export default App