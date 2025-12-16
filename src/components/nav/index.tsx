import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import logo from "../../assets/maw_logo.png";
import logoMobile from "../../assets/maw_logo_mobile.png";
import Button from "../button";
import { useNavigate } from "react-router";



export default function Nav(){
    const navigate = useNavigate();
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

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-10 max-lg:p-5 z-50">
                <div className="flex items-center cursor-pointer" onClick={goHome}>
                    <img src={logo} alt="Mawshroom Logo" className="hidden md:block" />
                    <img src={logoMobile} alt="Mawshroom Logo" className="md:hidden block w-[70px] h-[70px]" />
                </div>

                <div className="flex items-center gap-4 lg:text-[15px] max-lg:text-[11.5px] max-md:hidden">
                    <Button className="text-[var(--primary-text-color)] bg-[var(--primary-bg-color)]" onClick={goToLogin}>Already Have An Account? Log In</Button>
                    <Button className="text-[var(--secondary-text-color)] bg-white">Roadmap</Button>
                    <Button className="text-[var(--secondary-text-color)] bg-white">Gitbook</Button>
                </div>
                <div className="items-center gap-4 max-md:flex hidden">
                    <Button className="text-white bg-[var(--primary-bg-color)]" onClick={goToLogin}>Login</Button>
                    <span 
                        onClick={toggleSideNav}
                        className="cursor-pointer bg-white w-[48px] h-[48px] flex items-center justify-center rounded-[12px] p-[8px]"
                    >
                        <TiThMenu size={48} />
                    </span>
                </div>
            </nav>

            {/* Overlay */}
            {isSideNavOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-10 z-50"
                    onClick={closeSideNav}
                />
            )}

            {/* Side Nav */}
            <div 
                className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                    isSideNavOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col p-6 gap-10 h-full">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <button 
                            onClick={closeSideNav}
                            className="cursor-pointer bg-gray-100 w-[40px] h-[40px] flex items-center justify-center rounded-[12px] hover:bg-gray-200 transition-colors"
                        >
                            <IoClose size={24} />
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <Button className="text-[var(--secondary-text-color)] transition-all duration-500 hover:bg-[var(--primary-bg-color)] w-full text-left">Roadmap</Button>
                        <Button className="text-[var(--secondary-text-color)] transition-all duration-500 hover:bg-[var(--primary-bg-color)] w-full text-left">Gitbook</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
