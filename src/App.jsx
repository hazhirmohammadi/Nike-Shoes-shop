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

import Layout from "./components/layout/layout.js";


const App = () => (

      <main className="relative">
         <Layout>
            <Outlet/>
         </Layout>
      </main>
)


export default App;

