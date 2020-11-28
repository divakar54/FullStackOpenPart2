import React from 'react'

const Filter = ({persons, filter, updateFilter})=>{

     const callFilterFunction = event => {
        event.preventDefault()
        persons(filter)
      }

    return(
        <div>
            <form onSubmit={callFilterFunction}>
                <div>
                Filter shown with <input value={filter} onChange={updateFilter} />
                </div>
            </form>
        </div>
    )
}
export default Filter