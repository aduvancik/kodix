import React from 'react'
import { Link } from 'react-router-dom'

export default function LogInPage() {
    return (
        <div>
            <img className='w-[240px] h-[42px] mx-auto mt-[169px] mb-[40px]' src="/logo-kodix.png" alt="logo" />
            <div className='border-[1px] border-[#000000] rounded-[25px] flex w-[751px] mx-auto'>
                <div className='p-[22px]'>
                    <h1 className='text-[24px] font-medium mb-[22px]'>Sign In</h1>
                    <form className='flex flex-col'>
                        <label htmlFor="email" className='mb-[22px]'>Email address</label>
                        <input className='border-[1px] border-[#E8E8E8] mb-6 w-[394px] p-[15px]' type="email" name="email" id="email" placeholder='Your email address' />
                        <label htmlFor="password" className='mb-[22px]'>Password</label>
                        <div className='relative flex items-center'>
                            <button type="button" className='absolute right-[15px]'>
                                <img src="/shape.png" alt="look password" className='' />
                            </button>
                            <input className="p-[15px] border-[1px] border-[#E8E8E8] w-[394px]" type="password" placeholder='Enter password' id="password"/>
                        </div>
                        <Link className='text-[#04AA00] '>Forgot password?</Link>
                        <button type="button" className='flex justify-between'>
                            <span>Sign In</span>
                            <img src="/arrow.png" alt="arrow" />
                        </button>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    )
}
