const Input = ({type, placeholder, required, title, name, defaultValue}) => {
    return (
        <div className="w-full">
            <p className="font-semibold text-lg mb-1 text-[#444444]">{title}</p>
            <input name={name} type={type} placeholder={placeholder} className="outline-none w-full px-4 py-3 rounded-md border border-[#D0D0D0]" required={required} defaultValue={defaultValue} />
        </div>
    );
};

export default Input;