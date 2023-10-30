import Nav  from "../common/Nav.jsx"
import {Footer} from "../../sections/index.js";

const Layout = ({children}) => {

   return (
       <>
          <div>
             <Nav/>
             <main>{children}</main>
             <Footer/>
          </div>
       </>
   );
};

export default Layout;