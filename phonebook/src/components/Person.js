import React from 'react'
import Names from './Names'
const Person =(props)=>{
    return(
        <div>
          {props.persons.map( (n) => <Names key={n.name} name={n.name} number={n.number}/>)}
        </div>
    )
}
export default Person