const Input =({type, label, children, onChange, value, accept, name, placeholder}) => {
    return (
        <div className="relative">
            <input className="py-3 border border-[#a7a7a7] rounded-md px-2.5 w-full" name={name} placeholder={placeholder} type={type} id={label} value={value} accept={accept} onChange={onChange} required />
            {children}
        </div> 
    )
}

export default Input