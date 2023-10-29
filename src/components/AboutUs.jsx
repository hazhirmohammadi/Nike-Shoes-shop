import Button from "./common/Button.jsx";
import {Link} from "react-router-dom";
import {chevronLeft} from "../assets/icons/index.js";
import ServiceCard from "./common/ServiceCard.jsx";
import {aboutus} from "../constants/index.js";

const AboutUs = () => {

   return (
       <section className="max-container
       max-sm:mt-12 lg:pt-5 lg:pl-5">
          <Link to="/">
             <Button
                 label="Back to Home"
                 iconURL={chevronLeft}
             />
          </Link>

          <div className="padding">
             <div className="flex flex-col justify-start gap-5">
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