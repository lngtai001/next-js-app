import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
    const { pending, data } =  useFormStatus();
    // console.log("form data: ", data)

    let comp
    if (pending){
        comp = <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
    }else {
        comp = <>
            Submit{}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
    }
    return (
        <button
        type="submit"
        className="group flex items-center justify-center gap-2 mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
        disabled={pending} >
        {comp}
        </button>
    );
}