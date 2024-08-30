import React from 'react'

const About = () => {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ]
  return (
    <div>
      {details.map(list=>(
        <li key={list.id}>
          <h2>{list.name}</h2>
          <p>{list.role}</p>
        </li>
      ))}
    </div>
  )
}

export default About