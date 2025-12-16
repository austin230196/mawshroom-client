import { BsArrowRightCircleFill } from "react-icons/bs";

import Layout from '../../components/layout'
import Button from '../../components/button'
import { useNavigate } from "react-router";




export default function Home(){
    const navigate = useNavigate();
    
    const goToRegister = () => {
        navigate("/register");
    }


    return (
        <Layout>
            <div className="flex-1 min-h-screen flex items-center justify-center">
                <div className="flex-1 flex flex-col items-center justify-center max-w-[800px] p-10 mx-auto">
                    <h1 className="lg:text-[80px] md:text-[60px] text-[40px] text-white font-bold" style={{ fontFamily: "'Rubik Bubbles', sans-serif" }}>
                    Welcome To
                    </h1>
                    <h1 className="lg:text-[80px] md:text-[60px] text-[40px] mb-6 text-white font-bold" style={{ fontFamily: "'Rubik Bubbles', sans-serif" }}>
                    MAWSHROOMFi
                    </h1>
                    <p className="text-white text-center mb-10">Mawshroom Verse is a gamified mining ecosystem that gives users a simple way to join, earn, and grow inside the future MawshroomVerse.</p>
                    <Button onClick={goToRegister} className="w-[400px] py-[16px] text-[var(--primary-text-color)] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] shadow-[inset_0px_-4px_4px_0px_#834F24] bg-[var(--primary-bg-color)] flex items-center justify-center gap-4">Get Started <BsArrowRightCircleFill /></Button>
                </div>
            </div>
        </Layout>
    )
}
