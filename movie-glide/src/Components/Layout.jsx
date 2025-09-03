import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";


function Layout() {
    return (
       <div>
            <Navigation />

            <main className="container mx-auto p-4">
                <Outlet />
            </main>   
       </div>
    );
}

export default Layout;