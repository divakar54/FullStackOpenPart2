import React from 'react'


const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <li key={props.part.id}>
        {props.part.name} {props.part.exercises}
      </li>    
    )
  }
  
  const Content = ({ course }) => {
    if(course.id===1){
      return (
        <div>
          <Part part={course.parts[0]} />
          <Part part={course.parts[1]} />
          <Part part={course.parts[2]} />
          <Part part={course.parts[3]}/>
        </div>
      )
    }
    else if(course.id===2){
      return(
        <div>
        <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
      </div>
      )
    }
    return(
      <div>
        <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
      </div>
    )
  }
  
  const Course=(props)=>{
    const total = props.course.parts.reduce((s,p) => s+p.exercises, 0)
        return(
          <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <p>total of {total} execises</p>
          </div>
        )
  }

export default Course