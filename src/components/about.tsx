import Image from 'next/image'

export function About(){
    return (
        <div className="container px-5 py-50 mx-auto text-gray-600 body-font">
               <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.</p>
    </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-100 overflow-hidden">
                <Image width={1000}
                       height={800} 
                        alt="content" 
                        className="object-cover object-center h-full w-full" 
                        src="https://source.unsplash.com/3TLl_97HNJo" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
              <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <a className="text-pink-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-100 overflow-hidden">
                <Image width={1000}
                       height={800}  
                       alt="content" 
                       className="object-cover object-center h-full w-full" 
                       src="https://source.unsplash.com/3TLl_97HNJo" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
              <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <a className="text-pink-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-100 overflow-hidden">
                <Image width={1200}
                       height={800}
                       alt="content" 
                       className="object-cover object-center h-full w-full" 
                       src="https://source.unsplash.com/3TLl_97HNJo" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
              <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <a className="text-pink-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
    );
};