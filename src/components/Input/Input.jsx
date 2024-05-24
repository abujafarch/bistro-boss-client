const Input = ({type, placeholder, required, title}) => {
    return (
        <div className="w-full">
            <p className="font-semibold text-lg mb-1 text-[#444444]">{title}</p>
            <input type={type} placeholder={placeholder} className="outline-none w-full px-4 py-2 rounded-md border border-[#D0D0D0]" required={required} />
        </div>
    );
};

export default Input;