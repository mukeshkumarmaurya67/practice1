import AboutFitness from "./aboutfitness";
import EnrollNow from "./enroll";
import FitnessGoal from "./fitnessgoal";

import Myfooter from "./myfooter";
import Mynav from "./mynav";
import OurServices from "./ourservice";
import Userproducts from "./userproduct";

const Home=()=>{
    return(
<>


<Mynav />

        <FitnessGoal />
        <AboutFitness />
        <Userproducts />
        <EnrollNow />
       <OurServices />
       <Myfooter />
     
     
        
       
        </>
    )
}
export default Home;