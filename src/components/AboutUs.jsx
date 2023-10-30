
import ServiceCard from "./common/ServiceCard.jsx";
import {aboutus} from "../constants/index.js";
import Nav from "./common/Nav.jsx";
import Footer from "../sections/Footer.jsx";

const AboutUs = () => {
   console.log("about 12121")
   return (
       <section className="max-container
       max-sm:mt-12 lg:pt-5 lg:pl-5">
          <Nav/>

          <div className="padding">
             <div className="flex flex-col justify-start gap-5 bg-gray-300  rounded-lg p-4 shadow-2xl shadow-gray-500 mb-5">
                <h2 className="text-4xl font-palanquin font-bold">
                   About
                   <span className="text-coral-red">US</span>
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                   Everything in our bar and our products
                   and the way the market works
                </p>
             </div>
             <section className="max-container flex
              justify-center flex-wrap gap-9">
                {aboutus.map((about) => (
                    <ServiceCard
                        key={about.label}
                        label={about.label}
                        imgURL={about.imgURL}
                        subtext={about.subtext}
                    />
                ))}
             </section>

          </div>

       </section>
   );
};

export default AboutUs;