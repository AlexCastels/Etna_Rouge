import './buttonComponent.scss'
export function ButtonComponent({ text, onClick, disabled = false } : any) {
    return (
        <button
            onClick={onClick}
            className="button-component"
            disabled={disabled}
        >
            {text}
        </button>
    );
}