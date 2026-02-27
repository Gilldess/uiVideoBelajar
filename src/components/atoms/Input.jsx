const Input =({type, label, children, onChange, value, accept, name}) => {
    return (
        <div className="relative">
            <input className="py-3 border border-[#f1f1f1] rounded-md px-2.5 w-full" name={name} type={type} id={label} value={value} accept={accept} onChange={onChange} required />
            {children}
        </div> 
    )
}

export default Input