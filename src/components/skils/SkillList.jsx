// SkillList.jsx

import React from 'react';
import Skil from './Skil';

const SkillList = ({ skillsData ,main_title}) => {
  return (
    <div className="line row timeline">
     <div class="line row timeline-margin">
        <div class="content-wrap">
            <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>
            <div class="col-md-9 bg1 full-height"></div> 
            </div>
             </div>
            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>
                <div className="col-md-8 content-wrap bg1">
                    <h2 className="section-title">{main_title}</h2>
                </div>
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            
      {skillsData.map((skill, index) => (
        <>
        <div  className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />
        <div className="col-md-8 content-wrap bg1">
          <div key={index} className="line-content">
            <h3 className="section-item-title-1">{skill.title}</h3>
            <ul className="skills-list">
              {skill.skills.map((s, i) => (
                <Skil
                  key={i}
                  skilName={s.skilName}
                  wid={s.wid}
                  percant={s.percant}
                  skills={s.skills}
                  color={s.color}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
        </>
      ))}
    </div>
  );
};

export default SkillList;
