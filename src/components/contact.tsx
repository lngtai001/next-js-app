"use client"

import { sendEmail } from "@/actions/email";
import SectionHeading from "@/components/section-heading";
import SubmitButton from "@/components/submit-button";

const title = "Contact Us";
const subTitle = "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.";

type InputProps = {
  label: string;
  componentType: 'textarea' | 'input' | 'combo'
};

const CustomInput: React.FC<InputProps> = function({ label, componentType }: InputProps) {
  const lower = label.toLowerCase();
  let component;
  
  if(componentType == "input"){
    component = <input type="text" id={lower} name={lower} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
  } else if(componentType == "textarea"){
    component = <textarea id={lower} name={lower} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
  }
  return (
    <div className="relative">
    <label className="leading-7 text-sm text-gray-600">{label}</label>
    { component }
  </div>
  )
};

export const Contact: React.FC = function(){

  const formAction = async (formData: FormData): Promise<void> => {
    console.log("getting to form action")
    const { data, error } = await sendEmail(formData);

    if (error) {
      // toast.error(error);
      return;
    }

    // toast.success("Email sent successfully!");
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <SectionHeading title={title} subTitle={subTitle} />
          <form className="lg:w-1/2 md:w-2/3 mx-auto" 
            action={formAction}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <CustomInput label="Name" componentType="input"/>
              </div>
              <div className="p-2 w-1/2">
                <CustomInput label="Email" componentType="input"/>
              </div>
              <div className="p-2 w-full">
                <CustomInput label="Message" componentType="textarea"/>
              </div>
              <div className="p-2 w-full">
                <SubmitButton />
                {/* <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button> */}
              </div>
        </div>
      </form>
    </div>
  </section>
  
    );
};