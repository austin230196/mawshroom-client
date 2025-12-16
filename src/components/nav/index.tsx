import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import logo from "../../assets/maw_logo.png";
import logoMobile from "../../assets/maw_logo_mobile.png";
import Button from "../button";
import { useLocation, useNavigate } from "react-router";



export default function Nav(){
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };

    const goHome = () => {
        navigate("/");
    };

    const goToLogin = () => {
        navigate("/login");
    };

    const goToRegister = () => {
        navigate("/register");
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-10 max-lg:p-5 z-50 animate-fade-in">
                <div className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95" onClick={goHome}>
                    <img src={logo} alt="Mawshroom Logo" className="hidden md:block transition-all duration-300" />
                    <img src={logoMobile} alt="Mawshroom Logo" className="md:hidden block w-[70px] h-[70px] transition-all duration-300" />
                </div>

                <div className="flex items-center gap-4 lg:text-[15px] max-lg:text-[11.5px] max-md:hidden">
                    <Button className="text-[var(--primary-text-color)] bg-[var(--primary-bg-color)] transition-transform duration-300 hover:scale-105 active:scale-95" onClick={goToLogin}>Already Have An Account? Log In</Button>
                    <Button className="text-[var(--secondary-text-color)] bg-white transition-transform duration-300 hover:scale-105 active:scale-95">Roadmap</Button>
                    <Button className="text-[var(--secondary-text-color)] bg-white transition-transform duration-300 hover:scale-105 active:scale-95">Gitbook</Button>
                </div>
                <div className="items-center gap-4 max-md:flex hidden">
                    {
                        location.pathname === "/login" ?                     
                        <Button className="text-white bg-[var(--primary-bg-color)] text-[13px] transition-transform duration-300 hover:scale-105 active:scale-95" onClick={goToRegister}>Register</Button>
                        :
                        <Button className="text-white bg-[var(--primary-bg-color)] text-[13px] transition-transform duration-300 hover:scale-105 active:scale-95" onClick={goToLogin}>Login</Button>

                    }
                    <span 
                        onClick={toggleSideNav}
                        className="cursor-pointer bg-white w-[48px] h-[48px] flex items-center justify-center rounded-[12px] p-[8px] transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                        <TiThMenu size={48} className={`transition-transform duration-300 ${isSideNavOpen ? 'rotate-90' : ''}`} />
                    </span>
                </div>
            </nav>

            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ease-out ${
                    isSideNavOpen ? 'bg-opacity-10 opacity-100 pointer-events-auto' : 'bg-opacity-0 opacity-0 pointer-events-none'
                }`}
                onClick={closeSideNav}
            />

            {/* Side Nav */}
            <div 
                className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ease-out ${
                    isSideNavOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col p-6 gap-10 h-full">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className={`text-xl font-bold transition-all duration-300 ease-out ${
                            isSideNavOpen ? 'opacity-100 translate-x-0 delay-75' : 'opacity-0 translate-x-4 delay-0'
                        }`}>Menu</h2>
                        <button 
                            onClick={closeSideNav}
                            className="cursor-pointer bg-gray-100 w-[40px] h-[40px] flex items-center justify-center rounded-[12px] hover:bg-gray-200 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            <IoClose size={24} className="transition-transform duration-200" />
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <Button className={`text-[var(--secondary-text-color)] transition-all duration-300 ease-out hover:bg-[var(--primary-bg-color)] hover:scale-105 active:scale-95 w-full text-left ${
                            isSideNavOpen ? 'opacity-100 translate-x-0 delay-150' : 'opacity-0 translate-x-4 delay-0'
                        }`}>Roadmap</Button>
                        <Button className={`text-[var(--secondary-text-color)] transition-all duration-300 ease-out hover:bg-[var(--primary-bg-color)] hover:scale-105 active:scale-95 w-full text-left ${
                            isSideNavOpen ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-4 delay-0'
                        }`}>Gitbook</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
