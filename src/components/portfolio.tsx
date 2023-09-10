import SectionHeading from '@/components/section-heading'
import Image from 'next/image'

const title = "Portfolio";
const subTitle = "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.";

export function Portfolio(){
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <SectionHeading title={ title } subTitle={ subTitle } isAlternativeDisplay/>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image 
                    width={500}
                    height={500}
                    className="h-40 rounded w-full object-cover object-center mb-6" 
                    src="https://source.unsplash.com/3TLl_97HNJo" 
                    alt="portfolio content" />
                <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <Image 
                    width={500}
                    height={500}
                    className="h-40 rounded w-full object-cover object-center mb-6" 
                    src="https://source.unsplash.com/3TLl_97HNJo" 
                    alt="portfolio content" />
                <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <Image 
                    width={500}
                    height={500}
                    className="h-40 rounded w-full object-cover object-center mb-6" 
                    src="https://source.unsplash.com/3TLl_97HNJo" 
                    alt="portfolio content" />
                <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <Image 
                    width={500}
                    height={500}
                    className="h-40 rounded w-full object-cover object-center mb-6" 
                    src="https://source.unsplash.com/3TLl_97HNJo" 
                    alt="portfolio content" />
                <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};