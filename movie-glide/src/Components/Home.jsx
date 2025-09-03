import { Link } from "react-router-dom";
import Navigation from "./Navigation";


function Home() {
    return (
       <div>
           
            <Navigation />
                

            <nav>
                <Link to={"/navlinks"} className="text-white">Nav Links</Link>
            </nav>
       </div>
    )
}

export default Home;