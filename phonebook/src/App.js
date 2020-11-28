import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import comObject from './services/comms'
import Notification from './components/Notification'
import Filter from './components/Filter'
import './index.css'

const App = () => {

  const [ persons, setPersons ] = useState([])

  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [errorMessage, setErrorMessage] = useState('Add Someone...')

  const [filter, setFilter] = useState('')

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
          .catch(error=>{
            setErrorMessage(
              `Added ${persons.name}`
            )
            setTimeout(()=>{setErrorMessage(null)}, 5000)
          })
          .then(error=>{
            setErrorMessage(
              `Added ${newName}`
            )
            setTimeout(()=>{setErrorMessage(null)}, 5000)
          })
    }
    else{
      alert(`${newName} already in the phonebook`)
    }
    
  }
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()))


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

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} value={filter} updateFilter={handleFilterChange} />
      <Notification message={errorMessage} />
      <h3>Add a new number</h3>
        <PersonForm addName={addName} 
                    handleNameChange={handleNameChange} 
                    newName={newName} 
                    newNumber={newNumber} 
                    handleNumberChange={handleNumberChange} 
        />
      <h3>Numbers</h3>
        <Person persons={personsToShow} removePerson={deletePerson}/>
    </div>
  )
}

export default App