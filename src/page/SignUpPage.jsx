import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function SignUpPage() {
    const [password, setPassword] = useState(true);

    const showPassword = () => setPassword(!password);
    return (
        <div>
            <img className='w-[240px] h-[42px] mx-auto mt-[120px] mb-[40px]' src="/logo-kodix.png" alt="logo" />
            <div className='border-[1px] border-[#000000] rounded-[25px] flex w-[751px] mx-auto'>
                <div className='p-[22px]'>
                    <h1 className='text-[24px] font-medium mb-[22px]'>Sign Up</h1>
                    <form className='flex flex-col mb-12'>
                        <label htmlFor="email" className='mb-[22px]'>Email address</label>
                        <input className='border-[1px] border-[#E8E8E8] mb-6 w-[394px] p-[15px]' type="email" name="email" id="email" placeholder='Your email address' />
                        <div className='mb-6 flex gap-6'>
                            <div>
                                <label htmlFor="firstName">First name</label>
                                <input className='mt-[12px] border-[1px] max-w-[185px] border-[#E8E8E8] p-[15px]' type="text" name="firstName" id="firstName" placeholder='Your first name' />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last name</label>
                                <input className='border-[1px] mt-[12px] max-w-[185px] border-[#E8E8E8] p-[15px]' type="text" name="lastName" id="lastName" placeholder='Your first name' />
                            </div>
                        </div>
                        <label htmlFor="password" className='mb-[12px]'>Password</label>
                        <div className='relative flex items-center mb-6'>
                            <button type="button" className='absolute right-[15px]'>
                                <img onClick={() => showPassword()} src="/shape.png" alt="look password" className='hover:scale-110 duration-75' />
                            </button>
                            <input className="p-[15px] border-[1px] border-[#E8E8E8] w-[394px]" type={password ? "password" : "text"} placeholder='Enter password' id="password" />
                        </div>
                        <Link className='mb-8'><span className='text-[#04AA00] hover:underline'>Forgot password?</span></Link>
                        <button type="button" className='flex justify-between items-center bg-[#04AA00] rounded-[4px] py-[12px] px-[24px] text-white hover:bg-[#1e5d1d] duration-200'>
                            <span className='text-[14px] font-semibold'>Sign In</span>
                            <img src="/arrow.png" alt="arrow" />
                        </button>
                    </form>
                    <p className='text-[14px] font-semibold'>Don’t have an account? <Link to="/SignIn"><span className='text-[#04AA00] hover:underline'>Sign In</span></Link></p>
                </div>
                <div className='bg-[#000000] w-full rounded-br-[24px] rounded-tr-[24px] px-[22px] flex flex-col items-center p-8'>
                    <h2 className='text-white text-[24px] font-semibold'>Get Your FREE<br /> 30-Days Trial Now!</h2>
                    <div className='flex gap-[10px] mt-6'>
                        <img src="/dollar.png" alt="dollar" className='w-6 h-6' />
                        <div className='text-[14px]'>
                            <p className='font-medium text-white mb-[7px]'>Absolutely FREE</p>
                            <p className='text-[#484848]'>No hidden charges, No credit card required</p>
                        </div>
                    </div>
                    <div className='flex gap-[10px] mt-6'>
                        <img src="/dynamik.png" alt="dynamik" className='w-6 h-6' />
                        <div className='text-[14px]'>
                            <p className='font-medium text-white mb-[7px]'>Fast & Easy</p>
                            <p className='text-[#484848]'>Get access instantly, no downloads required</p>
                        </div>
                    </div>
                    <div className='flex gap-[10px] mt-6'>
                        <img src="/contact.png" alt="contact icon" className='w-6 h-6' />
                        <div className='text-[14px]'>
                            <p className='font-medium text-white mb-[7px]'>Your Own Data</p>
                            <p className='text-[#484848]'>Enjoy the Free Trial with your company data</p>
                        </div>
                    </div>
                    <div className='flex gap-[10px] mt-6'>
                        <img src="/star.png" alt="star icon" className='w-6 h-6' />
                        <div className='text-[14px]'>
                            <p className='font-medium text-white mb-[7px]'>Unlimited Features</p>
                            <p className='text-[#484848]'>Access all features of the world's #1 business software!</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[14px] w-full mt-auto text-white text-start'>Call us at <span className='text-[#04AA00]'>800 1301 448</span></p>
                </div>
            </div>
        </div>)
}
