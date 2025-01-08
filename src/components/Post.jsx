import React from 'react'

export default function Post({ title, body, date, img, flex }) {

  console.log(body);

  return (
    <div className={`${flex ? "flex flex-row max-w-[471px] w-full" : "max-w-[248px] w-full"
      } gap-5 hover:scale-110 duration-150 cursor-pointer`}>
      <div className='w-[246px] h-[136px] bg-[#F5F5F5] rounded-2xl'>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className={`${flex ? "max-w-[50%] w-full" : ""} flex flex-col gap-5`}>
        <span className={`${flex ? "" : "mt-[20px]"} text-[#0000001A] font-medium text-[12px]`}>{date}</span>
        <div className='flex flex-col gap-[8px]'>
          <span className='text-[17px] font-semibold line-clamp-3'>{title}</span>
          <span className='text-[14px] text-[#0000001A] truncate'>{body}.</span>
        </div>
      </div>
    </div>
  )
}
