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
                <div className="flex-1 flex flex-col items-center justify-center max-w-[600px] p-4 md:p-10 mx-auto">
                    <h3 className="lg:text-[40px] text-[30px] text-white font-bold" style={{ fontFamily: "'Rubik Bubbles', sans-serif" }}>Get Started</h3>
                    <h4 className="text-[var(--tertiary-text-color)] lg:text-[16px] text-[14px] mb-6">Join, Earn and Grow</h4>
                    <Input placeholder='Email' className="mb-6" />
                    <Input type="password" placeholder='Password' onClick={(e) => toggleShowPassword(e as React.MouseEvent<HTMLInputElement>)} showPassword={showPassword} className="mb-6" />
                    <Input placeholder='Referral Code (Optional)' className="mb-8" />
                    <Button className="w-full py-[16px] text-[var(--primary-text-color)] bg-[var(--primary-bg-color)] flex items-center justify-center gap-4">Register</Button>

                    <div className="flex w-full items-center justify-between gap-4 my-8">
                        <hr className="h-[2px] w-[100%] border-0 bg-[var(--tertiary-text-color)]" />
                        <span className="text-[var(--tertiary-text-color)]">OR</span>
                        <hr className="h-[2px] w-[100%] border-0 bg-[var(--tertiary-text-color)]" />
                    </div>

                    <Button className="w-full py-[16px] text-[var(--primary-text-color)] bg-white flex items-center justify-center gap-4">
                        <img src={googleIcon} alt="Google" className="w-[20px] h-[20px]" />
                        <span>Register with Google</span>
                    </Button>
                </div>
            </div>
        </Layout>
    )
}
