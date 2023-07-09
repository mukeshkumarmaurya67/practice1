import yoga2 from "./image/yoga2.jpeg";
import img7 from "./image/img7.png";
import img9 from "./image/img9.jpg";
import img10 from "./image/img10.webp";
import img11 from "./image/img11.jpg";
const OurServices = () => {


   var x = `It’s important to reassess your business goals at the start of the year to reflect any larger changes that might have impacted or might impact your business. The Covid-19 pandemic has had obvious impacts on the fitness industry   
   with gyms having to shift theirbusiness goalsand often their business models to pivot towards digital delivery of services.if you survey all the female members  of your gym and find out that a significant percentage don’t feel comfortableusing a section of your gym or have encountered harassment recently, this would give you clear goals for improving their engagement through better training ofstaff and other actions. `;
   let y="Gym Owner";
   let z="Ye-Jun";

   const icn1 = () => {
     
      document.getElementById("roleimage1").src = img9;
      document.getElementById("role1").innerHTML = y;
      document.getElementById("name1").innerHTML = z;
      document.getElementById("name2").innerHTML = z;
      document.getElementById("discriptions1").innerHTML = x;
   }
   const icn2 = () => {
      document.getElementById("roleimage1").src = img10;
      document.getElementById("role1").innerHTML = "Gym Trainer";
      document.getElementById("name1").innerHTML = "Devid Burner";
      document.getElementById("name2").innerHTML = "Devid Burner";
      document.getElementById("discriptions1").innerHTML = " A fitness trainer leads, instructs, and motivates individuals or groups in exercise activities, including cardiovascular exercise (exercises for the heart and blood system), strength training, and stretching. Getting fit and staying fit takes a lot of work and motivation.<br></br><b> A fitness trainer</b> leads, instructs, and motivates individuals or groups in exercise activities, including cardiovascular exercise (exercises for the heart and blood system), strength training, and stretching. Getting fit and staying fit takes a lot of work and motivation."
   }
   const icn3 = () => {
      var y = "No matter whether you want to bulk up, lose fat or just want to stay fit, you will be needing a specific bodybuilding diet plan for beginners to get the desired results. So before we jump onto the leaning and gaining bodybuilding diet plans for beginners, let’s have a brief look at the guidelines that can help you count your calories, carbs, fat and protein intake for every day.<br></br><b>Keep fueling your body</b> with multiple healthy snacks and meals but in small portions. This helps in keeping your blood sugar levels under check. Six meals a day plan also steadies your metabolism and improves the production of new muscles."
      document.getElementById("roleimage1").src = img11;
      document.getElementById("role1").innerHTML = "Gym Dietecian";
      document.getElementById("name1").innerHTML = "Myra Catrin";
      document.getElementById("name2").innerHTML = "Myra Catrin";
      document.getElementById("discriptions1").innerHTML = y;
   }
   return (
      <>
         <section className="our-services bg-blue py-50">
            <div className="container">
               <h2 className="text-warning text-center com-title">
                  <span className="text-light   ">Our </span>Services
               </h2>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                     <div className="our-services-img">
                        <img src={img7} height="400" width="400" className="img-fluid" />
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                     <p>
                        <b>The athlean </b>look is muscular, strong, and ripped. It is the ideal balance of muscle to body
                        fat that is optimized for performance without sacrificing aesthetics. Each of our training programs  is
                        designed to achieve that goal.While we do offer programs that allow for focused muscle growth or fat
                        loss we never lose sight of the ultimate goal…looking, feeling and moving like an athlete!
                     </p>
                     <p className="mt-3">
                        <b>The athlean </b>look is muscular, strong, and ripped. It is the ideal balance of muscle to body
                        fat that is optimized for performance without sacrificing aesthetics. Each of our training programs  is
                        designed to achieve that goal.While we do offer programs that allow for focused muscle growth or fat
                        loss we never lose sight of the ultimate goal…looking, feeling and moving like an athlete!
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="our-facility bg-blue py-50">
            <h3 className="com-title text-warning text-center main-title-h2">Our <span className="text-light">Facilities</span></h3>
            <div className="container">
               <div className="row  ">
                  <div className="col-lg-4 mt-4">
                     <div className="our-facility-list">
                        <ul>
                           <li><a href="https://images.squarespace-cdn.com/content/v1/545287cee4b0a0a12cc46868/1432212963893-GM314XKUUCM8AUGOG3J1/image-asset.jpeg" target="iframes">State-of-the-Art Equipment</a></li>
                           <li><a href="#" target="iframes">Private Locker Rooms</a></li>
                           <li><a href="https://www.spacethespa.com/" target="iframes">Spa Services at Cheap Price</a></li>
                           <li><a href="#" target="iframes">24/7 Access Available</a></li>
                           <li><a href="https://origympersonaltrainercourses.co.uk/files/img_cache/3129/500_1562600171_personaltrainingfactspiechart.jpg" target='iframes'>Personal Trainer Facilities</a></li>
                           <li><a href="https://www.verywellfit.com/group-fitness-benefits-5215497" target="iframes">Group Classes Available</a></li>
                           <li><a href="https://www.medicalplanet.in/" target="iframes">Childcare training center</a></li>
                           <li><a href="https://www.coralsprings.gov/files/assets/public/images/parks-amp-recreation/aquatic-center-pool.jpg?dimension=pageimagefullwidth&w=1140" target="iframes">Aquatic Pool Available</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-8 mb-4 mt-4 ">
                     <div>
                        <iframe src={yoga2} height="350px" width="100%" name="iframes" id="iframe"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="our-goal bg-blue mt-1 py-50">
            <div className="container">
               <h2 className="medium-title-h2 text-light text-center mb-4">Our <span className="text-warning">Goal</span></h2>
               <div className="row gy-3">
                  <div className="col-lg-6">
                     <div id="card" className="our-goal-card">
                        <img src={img9} width='97%' height="250px" alt="Gym Owner" id="roleimage1" className="img pt-1" />
                        <h3 id="name1">{y}</h3>
                        <p id="role1" className="role">Ceo & Founder</p>
                        <p>Muscle Mania</p>
                        <div style={{ margin: '5px 0px' }}>
                           <a href="#" id="cardlink"><i class="fa-brands fa-twitter"></i></a>
                           <a href="#" id="cardlink"><i class="fa-brands fa-linkedin"></i></a>
                           <a href="#" id="cardlink"><i class="fa-brands fa-youtube"></i></a>
                           <a href="#" id="cardlink"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                        <button id="cardbutton">Contact</button>
                     </div>

                  </div>
                  <div className="col-lg-6 text-center ">
                  <span id="name2">Ye-Jun</span>
                     <p className="text-light" id="discriptions1">
                        
                        {x}
                     </p>
                  </div>
               </div>
               <center>
                        <div id="divowner2" style={{ margin: '25px 0px' }}>
                           <button onClick={icn1} className="btn-round" >
                              <img src={img9} width="50px" height="50px" className="rounded-circle" /></button>
                           <button onClick={icn2} className="btn-round" >
                              <img src={img10} width="50px" height="50px" className="rounded-circle" /></button>
                           <button onClick={icn3} className="btn-round">
                              <img src={img11} width="50px" height="50px" className="rounded-circle" /></button>
                        </div>
                     </center>
            </div>
         </section >
      </>
   )
}
export default OurServices;