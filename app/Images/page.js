"use client"
import React, { useState } from 'react'
import axios from 'axios'

const About = () => {
  const [images, setimages] = useState([])

  const getImages = async () => {
    const res = await axios.get("https://picsum.photos/v2/list")
    const data = res.data
    setimages(data)
    console.log(images)
  }
  return (
    <>
      <div className='bg-gray-800 h-screen w-screen text-white flex flex-col items-center gap-10'>
        <h1 className='text-3xl'>Images Page</h1>
        <div className='flex justify-center items-center flex-col p-10'>
          <button className='px-5 py-3 bg-green-400 text-black rounded-xl cursor-pointer w-40 mb-10' onClick={getImages}>Get Images</button>
          <div className='flex gap-10 flex-wrap'>
            {images.map((elem,i)=>{
              return <img key={i} src={elem.download_url} height={200} width={200} className='rounded inline-block'/>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default About