import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           {/* <h3>this is home page </h3>
           <h3>all are control here</h3> */}
           <Footer></Footer>
           
        </div>
    );
};

export default Home;