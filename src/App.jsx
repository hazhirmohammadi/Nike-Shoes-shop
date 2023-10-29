// import {
//    SuperQuality,
//    Footer,
//    CustomerReviews,
//    Services,
//    Hero,
//    SpecialOffer,
//    Subscribe,
//    PopularProduct
// } from "./sections/index.js";

import {Outlet} from "react-router-dom";
import Home from "./components/Home.jsx";


const App = () => (
    <main className="relative">
       <Home/>
       <Outlet/>
    </main>
)


export default App;

