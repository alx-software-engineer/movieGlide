import { Link } from "react-router-dom";

function ContactUs() {
    return (

        <div>
            <h1 className="text-white">This is The Contact Us</h1>

             <nav>
                <Link to={"/"}>Home</Link>
            </nav>
        </div>

        
    )
}

export default ContactUs;