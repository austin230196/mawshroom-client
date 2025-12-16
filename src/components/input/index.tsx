import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Input({className, showPassword, ...props}: React.InputHTMLAttributes<HTMLInputElement> & {showPassword?: boolean}){
    return (
        <div className={`w-full flex items-center text-white ${className} p-[16px] justify-between gap-4 border-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-solid border-white rounded-[12px] bg-[#FFFFFF0D] transition-all duration-300 hover:border-opacity-80 focus-within:border-opacity-100 focus-within:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.3)] focus-within:scale-[1.02]`}>
            <input className={`flex-1 text-center outline-none placeholder:text-white placeholder:opacity-70 bg-transparent transition-all duration-300 focus:placeholder:opacity-50`} {...props} />
            {
                props.type === "password" && (
                    <span onClick={props.onClick} className="transition-transform duration-200 hover:scale-110 active:scale-95">
                        {showPassword ? <BsEye className="text-white cursor-pointer" /> : <BsEyeSlash className="text-white cursor-pointer" />}
                    </span>
                )
            }
        </div>
    )
}
