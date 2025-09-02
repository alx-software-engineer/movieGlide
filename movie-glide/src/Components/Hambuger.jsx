import { useState } from "react";
import {FaBars} from "react-icons/fa";

function Hambuger() {
    const [visible, setIsVisible] = useState(true);

    function toggleNavLinks() {
        setIsVisible(!visible);
    }

    return (
        <div>
            {visible ? <FaBars className="text-3xl" onClick={toggleNavLinks} />  : <h1>Hi</h1>}
            

        </div>

    )
}

export default Hambuger;