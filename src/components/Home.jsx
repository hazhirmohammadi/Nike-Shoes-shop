import {
   CustomerReviews, Footer,
   Hero,
   PopularProduct,
   Services,
   SpecialOffer,
   Subscribe,
   SuperQuality
} from "../sections/index.js";
import Nav from "./common/Nev.jsx";

const Home = () => {
   return (
       <section className="relative">
          <Nav/>
          <section className="xl:padding-1 wide:padding-r padding-b ">
             <Hero/>
          </section>
          <section className="padding ">
             <PopularProduct/>
          </section>
          <section className="padding ">
             <SuperQuality/>
          </section>
          <section className="padding ">
             <Services/>
          </section>
          <section className="padding ">
             <SpecialOffer/>
          </section>
          <section className="padding ">
             <CustomerReviews/>
          </section>
          <section className="padding-x sm:py-32 py-16 w-full ">
             <Subscribe/>
          </section>
          <section className="padding bg-black padding-x padding-t pb-8 ">
             <Footer/>
          </section>
       </section>
   );
};

export default Home;