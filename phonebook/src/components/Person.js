import React from 'react'
import Names from './Names'
const Person =({persons, removePerson})=>{
    return(
        <div>
          {persons.map((n) => <Names key={n.id} iD={n.id} name={n.name} number={n.number} handleDelete={removePerson}/>)}
        </div>
    )
}
export default Person