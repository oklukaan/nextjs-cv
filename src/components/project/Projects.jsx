import React from 'react'

const Projects = () => {
  return (
    <section className="timeline work-experience" id="projects-and-others">  
        <div className="line row timeline-margin"> 
            <div className="content-wrap"> 
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div> 
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>  
                <div className="col-md-9 bg1 full-height"></div>  
            </div> 
        </div>   
        <div className="line row">  
            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>  
            <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>     
            <div className="col-md-8 content-wrap bg1">  
                <h2 className="section-title">Projelerim</h2>
            </div>
            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
        </div>   
            <div className="line row"> 
            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>   
            <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-work "></div>     
            <div className="col-md-8 content-wrap bg1"> 
                <div className="line-content line-content-education"> 
                    <div className="job-description"> 
                        <ul className="neler-yaptim">
                            <li><strong>2020</strong> : 100 saatlik web tasarım/programlama eğitimi aldım.</li> 
                            <li><strong>2010</strong> : ODTÜ’de düzenlenen UPEM’e katıldım, yarışmada Ege Üniversitesini temsil ettim.</li> 
                            <li><strong>2011</strong> : TEGV’den gelen katılımcılara internet ve web teknolojileri eğitimi verdim.</li>
                        </ul> 
                    </div>
                </div>
             </div>   
            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>
             
    </section>   
  )
}

export default Projects
