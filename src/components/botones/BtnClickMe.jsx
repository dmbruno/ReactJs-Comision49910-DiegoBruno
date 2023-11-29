

export const BtnClickMe = ({ texto, className = '', onClick }) => {
    
    return (

        <button onClick={onClick} className={`py-2 px-5 my-3 text-white rounded ${className}`} >
            {texto}
        </button>
    )
}
