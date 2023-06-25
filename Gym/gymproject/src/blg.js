import BlogList1 from "./blgdetails";
import Category from "./blogcategory";

const Blog1 = () => {
  return (
    <div className="container-fluid " >
      
      <div className="row" >
        
        <div className="col-lg-2 m-4"id= "container2">
          <h2> Blogs Category </h2>
          <br />
          <Category />
        </div>

        <div className="col-lg-9" id="container1" ><center><h2 id="textshadow1">Our Branches</h2></center>
          <div className="row ">
            <div className="col-lg-3 m-4  shadow  bg-light" id="height1">
              <BlogList1
                title="Mighty Muscle"
                manager="Mukesh Kumar Maurya"
                addressname="#75 2nd Main 1st Floor Behind "
                addressname2="rainbow hostel 560049"
               
                email="help@mightymuscle.com"
                contact="+91-7079678654"
              />
            </div>

            <div className="col-lg-3 m-4 shadow bg-light"><BlogList1
                title="Dynamite Gym"
                manager="Satya priya"
                addressname="#75 2nd Main 1st Floor Behind "
                addressname2="rainbow hostel 560049"
                
                email="help@mightymuscle.com"
                contact="+91-7079678654"
              /></div>
            <div className="col-lg-3 m-4 shadow bg-light"><BlogList1
                title="Star Gym"
                manager="Satyam khade"
                addressname="#75 2nd Main 1st Floor Behind "
                addressname2="rainbow hostel 560049"
               
                email="help@mightymuscle.com"
                contact="+91-7079678654"
              /></div>
          </div>

          <div className="row">
            <div className="col-lg-3 m-4 shadow bg-light" id="height1">
            <BlogList1
                title="Diamond Gym"
                manager="Abhiram Singh"
                addressname="#75 2nd Main 1st Floor Behind "
                addressname2="rainbow hostel 560049"
                
                email="help@mightymuscle.com"
                contact="+91-7079678654"
              />
            </div>
            <div className="col-lg-3 shadow m-4 bg-light"><BlogList1
                title="Daga Gym"
                manager="Nathuram Godse"
                addressname="#75 2nd Main 1st Floor Behind "
                addressname2="rainbow hostel 560049"
              
                email="help@mightymuscle.com"
                contact="+91-7079678654"
              /></div>
            <div className="col-lg-3 shadow m-4 bg-light"><BlogList1
                title="Gold Gym"
                manager="Mohan Das Gandhi"
                addressname="#75 2nd Main 1st Floor Behind "
                addressname2="rainbow hostel 560049"
                
                email="help@mightymuscle.com"
                contact="+91-7079678654"
              /></div>
          </div>

          
        </div>
      </div>
    </div>
  );
};
export default Blog1;
