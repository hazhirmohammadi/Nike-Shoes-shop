
const Button = ({label,iconURL}) => {
   return (
       <button
           className="flex justify-center rounded-full
            items-center gap-2 px-7 py-4 border font-montserrat
            text-lg leading-none bg-coral-red text-white border-coral-red"
       >
          {label}
          <img
              src={iconURL}
              alt="arrowRight icon"
              className="ml-2 rounded-full w-5 h-5"
          />
       </button>
   );
};

export default Button;