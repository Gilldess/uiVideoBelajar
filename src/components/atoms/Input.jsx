const Input =({type, label, children}) => {
    return (
        <div className="relative">
            <input className="py-3 border border-[#f1f1f1] rounded-md px-2.5 w-full" type={type} name={label} required />
            {children}
        </div> 
    )
}

export default Input