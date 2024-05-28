
import { useDarkMode } from '../darkmode/DarkmodeContext';
import './buttonComponent.scss'
export function ButtonComponent({ text, onClick } : any) {
    const {mode} = useDarkMode()
    return (
        <button onClick={onClick} className={`button-component ${mode}`}>{text}</button>
    );
}