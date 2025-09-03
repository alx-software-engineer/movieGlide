import { useState } from "react";
import {FaBars} from "react-icons/fa";

function Hambuger() {
    const [visible, setIsVisible] = useState(true);

    function toggleNavLinks() {
        setIsVisible(!visible);
    }

    return (
        <div>

            <button onClick={toggleNavLinks}>
                {visible ? <FaBars className="text-3xl" />  : "Hi"}
            </button>

        </div>

    )
}

export default Hambuger;