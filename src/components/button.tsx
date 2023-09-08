
import BtnStyles from "@/components/button.module.scss"
  
export function SomeButtons() {
    return (
        <div className="flex flex-row justify-center items-center gap-4">
            <button className={BtnStyles.primary}>Primary</button>
            <button className={BtnStyles.error}>Error</button>
        </div>
    );
}