import './buttonComponent.scss'
export function ButtonComponent({ text, onClick } : any) {
    return (
        <button
            onClick={onClick}
            className="button-component"
          
        >
            {text}
        </button>
    );
}