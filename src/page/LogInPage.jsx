import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LogInPage() {
    const [password, setPassword] = useState(true);

    const showPassword = () => setPassword(!password);
    return (
        <div>
            <img className='w-[240px] h-[42px] mx-auto mt-[169px] mb-[40px]' src="/logo-kodix.png" alt="logo" />
            <div className='border-[1px] border-[#000000] rounded-[25px] flex w-[751px] mx-auto'>
                <div className='p-[22px]'>
                    <h1 className='text-[24px] font-medium mb-[22px]'>Sign In</h1>
                    <form className='flex flex-col mb-12'>
                        <label htmlFor="email" className='mb-[22px]'>Email address</label>
                        <input className='border-[1px] border-[#E8E8E8] mb-6 w-[394px] p-[15px]' type="email" name="email" id="email" placeholder='Your email address' />
                        <label htmlFor="password" className='mb-[12px]'>Password</label>
                        <div className='relative flex items-center mb-6'>
                            <button type="button" className='absolute right-[15px]'>
                                <img onClick={() => showPassword()} src="/shape.png" alt="look password" className='hover:scale-110 duration-75' />
                            </button>
                            <input className="p-[15px] border-[1px] border-[#E8E8E8] w-[394px]" type="password" placeholder='Enter password' id="password" />
                        </div>
                        <Link className='mb-8'><span className='text-[#04AA00] hover:underline'>Forgot password?</span></Link>
                        <button type="button" className='flex justify-between items-center bg-[#04AA00] rounded-[4px] py-[12px] px-[24px] text-white hover:bg-[#1e5d1d] duration-200'>
                            <span className='text-[14px] font-semibold'>Sign In</span>
                            <img src="/arrow.png" alt="arrow" />
                        </button>
                    </form>
                    <p className='text-[14px] font-semibold'>Don’t have an account? <Link to="/SignUp"><span className='text-[#04AA00] hover:underline'>Sign Up</span></Link></p>
                </div>
                <div className='bg-[#000000] w-full rounded-br-[24px] rounded-tr-[24px] px-[22px] flex flex-col justify-center items-center'>
                    <div className='mb-[12px] flex gap-[8px] '>
                        <h3 className='text-white text-[24px] font-bold text-center'>Kodix</h3>
                        <p className='border-[#1FFF1A] border-[1px] text-[#1FFF1A] text-[12px] font-medium px-[8px] py-[5px] flex items-center justify-center rounded-[4px]'>PRO</p>
                    </div>
                    <p className='text-[#484848] text-[14px] text-center mb-6' >Unlimited traffic, strategic<br /> support, and AI-driven upsells</p>
                    <Link to="/learn-more"><span className='underline Learn More text-[#1FFF1A] hover:no-underline duration-300'>Learn More</span></Link>
                </div>
            </div>
        </div>
    )
}
