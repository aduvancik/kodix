import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Перевірка, чи є користувач авторизованим
        const currentUser = localStorage.getItem("currentUser");
        setIsLoggedIn(Boolean(currentUser));
    }, []);

    const handleLogOut = () => {
        // Видаляємо авторизаційні дані
        localStorage.removeItem("currentUser");
        setIsLoggedIn(false);
        navigate("/login"); // Перенаправляємо на сторінку входу
    };

    return (
        <header className="flex justify-between h-[95px] items-center px-11 border-b-[1px] border-b-[#0000001A] font-medium">
            <ul className="text-[14px] flex gap-4 md:gap-6 lg:gap-8">
                <li>
                    <NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A] hover:text-black duration-150" : "text-[#000000]"}`} to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A] hover:text-black duration-150" : "text-[#000000]"}`} to="/feature">
                        Feature
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A] hover:text-black duration-150" : "text-[#000000]"}`} to="/">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${!isActive ? "text-[#0000001A] hover:text-black duration-150" : "text-[#000000]"}`} to="/testimonials">
                        Testimonials
                    </NavLink>
                </li>
            </ul>
            <Link to="/"><img src="/logo-kodix.png" alt="logo" className="hidden md:block"/></Link>
            <div className="flex gap-2 h-min text-[12px] md:text-[17px]">
                {isLoggedIn ? (
                    <button
                        onClick={handleLogOut}
                        className="bg-[#04AA00] text-white rounded-3xl md:py-[12.5px] md:px-[32.5px] p-[10px]"
                    >
                        Log Out
                    </button>
                ) : (
                    <>
                        <Link to="/login" className="bg-[#ffffff] border-[1px] border-[#0000001A] text-[#000000] rounded-3xl md:py-[12.5px] md:px-[32.5px] py-[7px] px-[10px]">
                            Log in
                        </Link>
                        <Link to="/signUp" className="bg-[#04AA00] text-white rounded-3xl md:py-[12.5px] md:px-[32.5px] px-[10px] py-[8px]">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
