import { ReactNode } from "react";
import bgImage from "../../assets/mawshroom.png";
import Nav from "../nav";



export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className={`flex flex-col  min-h-screen bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${bgImage})`}}>
            <div className="flex-1 bg-[#000000B2]">
                <Nav />
                <div className="flex-1 max-w-[1200px] mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
