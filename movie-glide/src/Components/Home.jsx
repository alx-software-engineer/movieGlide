import GetStartedBtn from "./GetStartedBtn";
import UpcomingBtn from "./UpcomingBtn";


function Home() {
    return (
       <div>
            <h1 className="text-secondary text-center mb-5"> 
                Discover the series streaming
                Experience with  <span className="font-bold">MovieGlide</span>
            </h1>

            <h2 className="text-gray-600 text-xs text-center mb-7">
                Our young and expert admins prepare amazing and 
                trend series for you to watch online and priceless
            </h2>

            <div className="flex justify-center gap-8">
                <GetStartedBtn />
                <UpcomingBtn />
            </div>
       </div>
    );
}

export default Home;