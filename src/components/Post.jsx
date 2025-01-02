import React from 'react'

export default function Post() {
  return (
    <div className='flex flex-col gap-5 w-[248px]'>
        <div className='w-[246px] h-[136px] bg-[#F5F5F5] rounded-2xl'></div>
        <div className='flex flex-col gap-5'>
            <span className='text-[#0000001A] font-medium text-[12px]'>wednesday 12, march 2024</span>
            <div className='flex flex-col gap-[8px]'>
                <span className='text-[17px] font-semibold'>A Journey into the Beauty and Majesty of Our Planet</span>
                <span className='text-[14px] text-[#0000001A] truncate'>Exploring breakthrough innovations, emerging technologies, and the impact of digital transformation on society</span>
            </div>
        </div>
    </div>
  )
}
