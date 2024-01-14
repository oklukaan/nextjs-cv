import React from 'react'

const Skil = ({wid,percant,skills,skilName,color}) => {
  return (
    <li> 
    <div className="progress"> 
    <div className={`progress-bar${color ? `-${color}` : ''}`} role="progressbar" data-percent={`${percant}%`} style={{ width: wid+'%' }}> 
    <span className="sr-only">{percant}% Complete</span>
     </div>
      <span className="progress-type">{skilName}</span>
       <span className="progress-completed">{percant}%</span>
        </div> 
        <ul className="skill-usage">
            {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
            ))}
        </ul> 
    </li>   
  )
}

export default Skil