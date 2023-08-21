"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import MyCv from '../components/cv/MyCv';


export default function Home() {


  const myExperince = [
    {
      id: 1,
      job: "Software Intern",
      location: "Ankara / Turkiye",
      company: "Arca",
      time: "01/04/2021 - 06/06/2021"
    },
    {
      id: 2,
      job: "Software Intern",
      location: "Lizbon / Portekiz",
      company: "ISTEC University",
      time: "01/01/2022 - 01/06/2022"
    },
    {
      id: 3,
      job: "Front-end Developer",
      location: "İstanbul / Turkiye",
      company: "Piernet",
      time: "09/08/2022 - Devam ediyor"
    }
  ]

  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleMilestoneClick = (index) => {
    setSelectedMilestone(index);


  };

  return (
    <div className={styles.container}>

      <div className={`${styles.main} flex-sm-reverse`}>
        <div className='col-md-6 col-lg-6 col-sm-10 col-10'>
          <div className='d-flex justify-content-center flex-direction-column gap-15'>
            <span className='pt-10 pb-10'>Welcome to my portfolio website!</span>
            <h2>Hey folks, Im Kaan Okluçam </h2>
            <marquee className='font-orange' scrollamount="10" height="50" width="60%" direction="right">
              Software Developer
            </marquee>
            <h4>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</h4>
          </div>
        </div>
        <div className='col-md-6 col-lg-6 col-sm-10 col-10'>
          <Image src='/mes.svg' width={300} height={400} alt='banner görsel' />
        </div>
      </div>

      <div className={`${styles.container_three}`}>
        <h2 className={styles.font_weight_bold}>My Experiences</h2>
      </div>

      <div className={styles.main}>


        <div className="experience-road">
          <div className="milestone-container">
            {myExperince.map((milestoneIndex) => (
              <div
                key={milestoneIndex.id}
                className={`milestone ${selectedMilestone && selectedMilestone.id === milestoneIndex.id ? 'selected' : ''}`}
                onClick={() => handleMilestoneClick(milestoneIndex)}
              ><span className={styles.text_number}>{milestoneIndex.id}</span></div>
            ))}
          </div>

        </div>

      </div>
     
      <div className={styles.container_two}>

        {selectedMilestone && (
          <motion.div
            className={`d-flex justify-content-center padding-15 align-items-center gap-5 flex-direction-column ${styles.column}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div className={`${styles.column_border}`}>
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <div><span >Job :</span> {selectedMilestone.job}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
                <div><span >Location  :</span>{selectedMilestone.location}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
                <div><span >Company :</span> {selectedMilestone.company}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
                <div><span >Start Time and Finish Time:  </span>  {selectedMilestone.time}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>

    <MyCv/>
    </div>
  )
}
