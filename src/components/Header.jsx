import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-between h-[95px] items-center px-11 border-b-[1px] border-b-[#0000001A] font-medium">
            <ul className="text-[14px] flex gap-8">
                {/*  */}
                <li><NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A]" : 'text-[#000000]'}`} to="/home">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A]" : 'text-[#000000]'}`} to="/home">Feature</NavLink></li>
                <li><NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A]" : 'text-[#000000]'}`} to="/">Blog</NavLink></li>
                <li><NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A]" : 'text-[#000000]'}`} to="/home">Testimonials</NavLink></li>
            </ul>
            <img src="logo-kodix.png" alt="logo" />
            <div className="flex gap-2 h-min">
                <button type="button" className="bg-[#ffffff] border-[1px] border-[#0000001A] text-[#000000] rounded-3xl py-[12.5px] px-[32.5px]">Log in</button>
                <button type="button" className="bg-[#04AA00] text-white rounded-3xl py-[12.5px] px-[32.5px]">Sign Up</button>
            </div>
        </header>
    )
}
