import React from 'react'
import Post from '../components/Post'

export default function BlogPage() {
  return (
    <div className='pb-[34px] flex flex-col items-center'>
      <div className='flex py-[34px] flex-col gap-[20px]'>
        <div className='flex gap-[6px] items-center justify-center'>
          <img src="icon-star.jpg" alt="logo" />
          <span className='text-[20px] font-medium'>Featured</span>
        </div>
        <div className='flex flex-col gap-[8px]'>
          <h1 className='mx-auto max-w-[350px] text-center text-[32px] font-semibold'>Global Climate Summit Urges Immediate Action</h1>
          <p className='text-[#0000001A] text-[14px] '>Leaders from around the world gathered for a global climate summit, emphasizing the urgent need for coordinated action to address climate change.</p>
        </div>
        <div className='flex gap-[20px] font-medium justify-center'>
          <span className='text-[12px] text-[#0000001A]'>wednesday 12, march 2024</span>
          <div className='flex gap-2 p-[5px] border-[1px] rounded-[99px] border-[#0000001A]'>
          <div className='bg-[#0000001A] w-6 h-6 rounded-full'></div>
            <span className=''>John Doe</span>
          </div>
        </div>
        <div className='relative w-max mx-auto'>
          <div className='rounded-3xl bg-[#F5F5F5] w-[894px] h-[339px] mx-auto'></div>
          <span className='font-medium bg-[#00000066] py-1 px-2 rounded-[2px] absolute left-4 bottom-[22px] text-[10px] text-white'>Photo by Antara</span>
        </div>
      <div className='flex gap-3 justify-center'>
        <span className='text-[14px]'>Share to</span>
        <div className='flex gap-[6px]'>
          <img src="/facebook.jpg" alt="facebook" />
          <img src="/twitter.png" alt="twitter" />
          <img src="/youtube.png" alt="youtube" />
        </div>
      </div>
      </div>
      <div className='mt-[15px] border-[1px] border-[#D6D6D6] rounded-3xl flex gap-5 p-5'>
          <Post />
          <Post />
          <Post />
          <Post />
      </div>
    </div>
  )
}

