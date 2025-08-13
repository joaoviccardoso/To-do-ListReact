import './input.css'

function Input({type, className,onChange,value}){
    return(
        <input 
            onChange={onChange}
            type={type}
            className={className}
            value={value}
        />
    )
}

export default Input