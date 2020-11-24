import React from 'react'

const Names = ({name, number, handleDelete, iD}) =>{
    return(
        <div>
            {name} {number} <button onClick={()=>handleDelete(iD, name)}>Delete</button>
        </div>
    )
}
export default Names