import Nav from "./common/Nav.jsx";
import Button from "./common/Button.jsx";


const ContactUs = () => {
   return (
       <section className="max-container
       max-sm:mt-12">
          <Nav/>
          <div className="padding">
             <div className="flex flex-col justify-start gap-5 bg-gray-300  rounded-lg p-4 shadow-2xl shadow-gray-500 mb-5">
                <h2 className="text-4xl font-palanquin font-bold">
                   Contact
                   <span className="text-coral-red">Us</span>
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                   Everything in our bar and our products
                   and the way the market works
                </p>
             </div>


             <div className="shadow-3xl  p-4 grid grid-cols-12 ">
                <div className="flex flex-col space-y-2 col-span-6 ">
                   <h3 className="  w-fit rounded-3xl p-5 shadow-3xl">
                      Proposal ,<span className="text-coral-red">Problem</span>
                   </h3>
                   <div className="lg:max-w-lg   w-fit flex items-center
                   max-sm:flex-col gap-5 p-2.5 sm:border
                   sm:border-slate-gray rounded-3xl">
                      <input
                          type="text"
                          placeholder="Subscribe@nike.com"
                          className="input"
                      />
                      <div className="flex max-sm:justify-end items-center max-sm:w-full">
                         <Button
                             label="sabmit"
                             fullwidth=""

                         />
                      </div>
                   </div>
                   <div className="lg:max-w-lg   w-full flex items-center
                   max-sm:flex-col gap-5 p-2.5 sm:border
                   sm:border-slate-gray rounded-3xl">
                   <textarea
                       placeholder="Subscribe@nike.com"
                       className="input"
                   />
                   </div>
                </div>
                {/***************/}
                <div className=" flex flex-1 flex-col justify-end  col-span-6">
                   <h2 className="mt-10 font-palanquin
                      text-2xl capitalize font-bold lg:">
                      we provide you
                      <span className="text-coral-red">super</span>
                      Shoes
                      <span className="text-coral-red">Quality</span>
                      Shoes
                   </h2>
                   <p className="mt-4 lg:max-w-lg info-text">
                      Ensuring premium comfort and style, our meticulously crafted footwear
                      is designed to elevate your experience, providing you with unmatched
                      quality, innovation, and a touch of elegance.</p>
                   <p className='mt-6 lg:max-w-lg info-text'>
                      Our dedication to detail and excellence ensures your satisfaction
                   </p>

                </div>
             </div>

          </div>


       </section>
   );
};

export default ContactUs;