import { Link } from "react-router-dom";
import Navigation from "./Navigation";


function Home() {
    return (
       <div>
        <div>
             <h1 className="text-red-600">Movie Glide</h1>
             <Navigation />
        </div>
            

            {/* <nav>
                <Link to={"/navlinks"}>Nav Links</Link>
            </nav> */}
       </div>
    )
}

export default Home;