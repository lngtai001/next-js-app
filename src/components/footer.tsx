import Logo from "@/components/logo";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md"

function Bottom() {
    return (
        <div className="bg-gray-100">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <Logo />
                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2019 Acme — All rights reserved.</p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 gap-3 justify-center sm:justify-start">
                <FaFacebookF className="w-5 h-5 opacity-70" />
                <FaTwitter className="w-5 h-5 opacity-70" />
                <FaInstagram className="w-5 h-5 opacity-70" />
                <FaLinkedin className="w-5 h-5 opacity-70" />
                </span>
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-pink-50">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/5 md:w-1/2 w-full px-4 lg:px-10">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTENT</h2>
                <nav className="list-none mb-10">
                  <div className="text-gray-600 flex flex-wrap justify-center">
                      Lorem ipsume dkgnkejgnoweiienk nklsnkjajgr
                  </div>
                </nav>
              </div>
              <div className="lg:w-1/5 md:w-1/2 w-full px-4 lg:px-10">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">INFORMATION</h2>
                <nav className="list-none mb-10">
                  <div className="text-gray-600 flex flex-wrap justify-center">
                      Lorem ipsume dkgnkejgnoweiienk nklsnkjajgr
                  </div>
                </nav>
              </div>
              <div className="lg:w-1/5 md:w-1/2 w-full px-4 lg:px-10">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LEGAL</h2>
                <nav className="list-none mb-10">
                  <div className="text-gray-600 flex flex-wrap justify-center">
                      Lorem ipsume dkgnkejgnoweiienk nklsnkjajgr
                  </div>
                </nav>
              </div>
              <div className="lg:w-1/5 md:w-1/2 w-full px-4 lg:px-10">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">HELP</h2>
                <nav className="list-none mb-10">
                  <div className="text-gray-600 flex flex-wrap justify-center">
                      Lorem ipsume dkgnkejgnoweiienk nklsnkjajgr
                  </div>
                </nav>
              </div>
              <div className="lg:w-1/5 md:w-1/2 w-full px-4 lg:px-10">
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="inline-flex items-center">
                    <span className="flex-grow flex flex-col">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <span className="flex items-center gap-1">
                      <MdEmail opacity-70/>
                      <a className="text-pink-500 leading-relaxed">example@email.com</a>
                    </span>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <span className="flex items-center gap-1 ">
                      <MdPhone opacity-70/>
                      <p className="leading-relaxed">123-456-7890</p>
                    </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Bottom />
        </footer>
    );
  }