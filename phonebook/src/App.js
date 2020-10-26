import React, { useState } from 'react'
import Names from './components/Names'
const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addName=(event)=>{
    event.preventDefault()
    const res = persons.find((n)=>n.name===newName)
    if(res===undefined){
      console.log("runing inse if")
      const newNameObject={
        name: newName
      }
      setPersons(persons.concat(newNameObject))
    }
    else{
      console.log("runing inse else")
      alert(`${newName} already in the phonebook`)
    }
    
  }

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((n)=> 
        <Names key={n.name} name={n.name} />)}
      </ul>
      
    </div>
  )
}

export default App