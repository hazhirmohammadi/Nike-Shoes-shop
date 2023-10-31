
const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullwidth}) => {

   return (
       <button
           className={`flex justify-center 
            items-center gap-2 px-7 py-4 border font-montserrat
            text-lg leading-none  hover:opacity-90
          ${
               backgroundColor ? 
                   `${backgroundColor} ${textColor} ${borderColor}`
                   : "bg-coral-red text-white border-coral-red"
           } rounded-full ${fullwidth && `w-full` } `}
       >
          {label}
          {iconURL && <img
              src={iconURL}
              alt="arrowRight icon"
              className="ml-2 rounded-full w-5 h-5"
          />}
       </button>
   );
};

export default Button;