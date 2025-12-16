// import { BsArrowRightCircleFill } from "react-icons/bs";

import Layout from '../../components/layout'
import Button from '../../components/button'
import Input from '../../components/input'
import googleIcon from '../../assets/google.png'
import { useState } from 'react';




export default function Register(){
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if(showPassword){
            (e.currentTarget.parentNode?.firstChild as HTMLInputElement).type = "text";
        }else {
            (e.currentTarget.parentNode?.firstChild as HTMLInputElement).type = "password";
        }
        setShowPassword(old => !old);
    };

    return (
        <Layout>
            <div className="flex-1 min-h-screen flex items-center justify-center">
                <div className="flex-1 flex flex-col items-center justify-center max-w-[600px] p-6 md:p-10 mx-auto">
                    <h3 className="lg:text-[40px] text-[30px] text-white font-bold animate-fade-in-up" style={{ fontFamily: "'Rubik Bubbles', sans-serif" }}>Get Started</h3>
                    <h4 className="text-[var(--tertiary-text-color)] lg:text-[16px] text-[14px] mb-6 stagger-1 animate-fade-in-up">Join, Earn and Grow</h4>
                    <Input placeholder='Email' className="mb-6 stagger-2 animate-fade-in-up" />
                    <Input type="password" placeholder='Password' onClick={(e) => toggleShowPassword(e as React.MouseEvent<HTMLInputElement>)} showPassword={showPassword} className="mb-6 stagger-3 animate-fade-in-up" />
                    <Input placeholder='Referral Code (Optional)' className="mb-8 stagger-4 animate-fade-in-up" />
                    <Button className="w-full py-[16px] text-[var(--primary-text-color)] bg-[var(--primary-bg-color)] flex items-center justify-center gap-4 stagger-5 animate-scale-in transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">Register</Button>

                    <div className="flex w-full items-center justify-between gap-4 my-8 stagger-5 animate-fade-in">
                        <hr className="h-[2px] w-[100%] border-0 bg-[var(--tertiary-text-color)] transition-all duration-500" />
                        <span className="text-[var(--tertiary-text-color)]">OR</span>
                        <hr className="h-[2px] w-[100%] border-0 bg-[var(--tertiary-text-color)] transition-all duration-500" />
                    </div>

                    <Button className="w-full py-[16px] text-[var(--primary-text-color)] bg-white flex items-center justify-center gap-4 stagger-5 animate-scale-in transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <img src={googleIcon} alt="Google" className="w-[20px] h-[20px] transition-transform duration-300 hover:scale-110" />
                        <span>Register with Google</span>
                    </Button>
                </div>
            </div>
        </Layout>
    )
}
