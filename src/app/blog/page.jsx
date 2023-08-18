"use client"
import useSWR from "swr"; 
import React from 'react';
import styles from './page.module.css';

import fetcher from "../../../libs/fetcher";

import Image from 'next/image';
import Link from 'next/link';


const Blog =  () => {

  const { data, error, isLoading } = useSWR('/api/posts', fetcher)
 
  if (error) return <div className="container">failed to load</div>
  if (isLoading) return <div className="container">loading...</div>
  console.log("data",data[0].img);
  return (
    <div className='slider'>
    <div className={styles.slider_picture}></div>
      {data.map(e=>(
        <div className='container pt-40' key={e._id}>
        <div className={styles.information}>
          <div className={styles.columns}> 
            <Image alt="Picture of the author" src="/avatar.png" width={30} height={30} />
            <div className='user_information'>{e.name}</div>
          </div>
          <div className={styles.columns}>
            <Image alt="blog picture" src={e?.img} width={500} height={400}/>
           
          </div>
          <div className={styles.columns}>
              My Blog category  
           
            </div>
            <div className={styles.columns}>
              <h3>My Blog Title</h3>
            </div>
            <div className={styles.columns}>
            <div className={styles.blog_border}>
              <Link href={`/blog/${e._id}`}>
              <p className={styles.blog_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit magni corrupti totam explicabo quasi in nisi aperiam rerum cum, inventore facere debitis exercitationem quisquam dolorem odit laborum ut amet maxime?</p>
              <p className={styles.blog_text }>Read more..</p>
              </Link>
            </div>
            
            </div>
        </div>
  
      </div>
      ))}
    </div>
  )
}

export default Blog