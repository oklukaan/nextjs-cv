"use client"
import React from 'react'
import { notFound } from 'next/navigation';
import fetcher from '../../../../libs/fetcher';
import useSWR from "swr"; 
import BackButton from '../../../components/back-button/BackButton';


const BlogPost = ({params}) => {

  const { data, error, isLoading } = useSWR(`/api/posts/${params.id}`, fetcher)
 
  if (error) return <div className='container'>failed to load</div>
  if (isLoading) return <div className='container'>loading...</div>
 
  return (
    <div className='container'>
        <div>
          {data?.name}
          <BackButton />
        </div>
       
    </div>
  )
}

export default BlogPost