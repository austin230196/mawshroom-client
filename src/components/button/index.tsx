export default function Button({children, className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button className={`cursor-pointer px-[20px] py-[12px] rounded-[12px] transition-all duration-300 ${className}`} {...props}>
            {children}
        </button>
    )
}
