
import BtnStyles from "./button.module.scss"
  
export function Something() {
    return (
        <div className="min-h-screen flex flex-row justify-center items-center gap-4">
            <button className={BtnStyles.primary}>Primary</button>
            <button className={BtnStyles.error}>Error</button>
        </div>
    );
}