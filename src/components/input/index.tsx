import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Input({className, showPassword, ...props}: React.InputHTMLAttributes<HTMLInputElement> & {showPassword?: boolean}){
    return (
        <div className={`w-full flex items-center text-white ${className} p-[16px] justify-between gap-4 border-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-solid border-white rounded-[12px] bg-[#FFFFFF0D]`}>
            <input className={`flex-1 text-center outline-none placeholder:text-white`} {...props} />
            {
                props.type === "password" && (
                    <span onClick={props.onClick}>
                        {showPassword ? <BsEye className="text-white cursor-pointer" /> : <BsEyeSlash className="text-white cursor-pointer" />}
                    </span>
                )
            }
        </div>
    )
}
