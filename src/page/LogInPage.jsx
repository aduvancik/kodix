import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LogInPage() {
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Функція авторизації
    const handleSignIn = () => {
        // Отримуємо список користувачів з localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Перевіряємо, чи існує користувач із введеними даними
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Зберігаємо дані авторизованого користувача
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Перенаправляємо користувача на головну сторінку
            navigate('/');
        } else {
            // Виводимо помилку, якщо дані невірні
            setError('Invalid email or password');
        }
    };

    const showPasswordFun = () => setShowPassword(!showPassword);

    return (
        <div>
            <Link to="/"><img
                className="w-[240px] h-[42px] mx-auto mt-[169px] mb-[40px]"
                src="/logo-kodix.png"
                alt="logo"
            /></Link>
            <div className="border-[1px] border-[#000000] rounded-[25px] flex w-[751px] mx-auto">
                <div className="p-[22px]">
                    <h1 className="text-[24px] font-medium mb-[22px]">Sign In</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form
                        className="flex flex-col mb-12"
                        onSubmit={e => {
                            e.preventDefault();
                            handleSignIn();
                        }}
                    >
                        <label htmlFor="email" className="mb-[22px]">Email address</label>
                        <input
                            className="border-[1px] border-[#E8E8E8] mb-6 w-[394px] p-[15px]"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="mb-[12px]">Password</label>
                        <div className="relative flex items-center mb-6">
                            <input
                                className="p-[15px] border-[1px] border-[#E8E8E8] w-[394px]"
                                type={showPassword ? "password" : "text"}
                                placeholder="Enter password"
                                id="password"
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button type="button" className='absolute right-[15px]'>
                                <img onClick={() => showPasswordFun()} src="/shape.png" alt="look password" className='hover:scale-110 duration-75' />
                            </button>
                        </div>
                        <Link className="mb-8">
                            <span className="text-[#04AA00] hover:underline">Forgot password?</span>
                        </Link>
                        <button
                            type="submit"
                            className="flex justify-between items-center bg-[#04AA00] rounded-[4px] py-[12px] px-[24px] text-white hover:bg-[#1e5d1d] duration-200"
                        >
                            <span className="text-[14px] font-semibold">Sign In</span>
                            <img src="/arrow.png" alt="arrow" />
                        </button>
                    </form>
                    <p className="text-[14px] font-semibold">
                        Don’t have an account?{' '}
                        <Link to="/SignUp">
                            <span className="text-[#04AA00] hover:underline">Sign Up</span>
                        </Link>
                    </p>
                </div>
                <div className="bg-[#000000] w-full rounded-br-[24px] rounded-tr-[24px] px-[22px] flex flex-col justify-center items-center">
                    <div className="mb-[12px] flex gap-[8px] ">
                        <h3 className="text-white text-[24px] font-bold text-center">Kodix</h3>
                        <p className="border-[#1FFF1A] border-[1px] text-[#1FFF1A] text-[12px] font-medium px-[8px] py-[5px] flex items-center justify-center rounded-[4px]">PRO</p>
                    </div>
                    <p className="text-[#484848] text-[14px] text-center mb-6">
                        Unlimited traffic, strategic
                        <br /> support, and AI-driven upsells
                    </p>
                    <Link to="/learn-more">
                        <span className="underline Learn More text-[#1FFF1A] hover:no-underline duration-300">Learn More</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
