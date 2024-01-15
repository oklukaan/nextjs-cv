// SkilMain.js
import React from 'react';
import Skil from './Skil';

const SkilMain = ({ skills }) => {
    console.log(skills);
  
    return (
      <div className="line row as">
        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />
        <div className="col-md-8 content-wrap bg1">
          <div className="line-content">
            <h3 className="section-item-title-1">Skills</h3>
            <ul className="skills-list">
              {Object.entries(skills).map(([categoryName, categorySkills]) => (
                <Skil
                  key={categoryName}
                  categoryName={categoryName}
                  skills={categorySkills}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
      </div>
    );
  };
  
  export default SkilMain;