import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";


function Layout() {
    return (
       <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>   

            <Footer />
       </div>
    );
}

export default Layout;