import img6 from "./image/img6.png"





const AboutFitness = () => {

    const btn = () => {
        document.querySelector("#btn").style.display = 'none';
    }


    return (
        <>
            {/* Fitness page start from here */}
            <section className="about-fitness blue-background">
                <div className='container mt-1'>

                    <h2 className="text-center text-warning main-title-h2" ><span className="text-light">About</span> Fitness</h2>

                    <div className="row pb-2 ">

                        <div className="col-sm-6 col-md-6 col-12 mt-3">
                            <div className="fitness-img">
                                <img src={img6} width="350px" height="350px" alt="gym couple" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-12 text-light">

                            <div className="about-fitness-paragraph">

                                Fitness is the condition of being physically fit and healthy and involves attributes that include, but are not limited to mental acuity,
                                cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility.Fitness is the condition of being
                                physically fit and healthy and involves attributes that include,
                                but are not limited to mental acuity, cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility.<br />




                                <div className="collapse" id="demo">The evolution of fitness can be credited to man's need for survival and can be traced back to the
                                    beginning of mankind where people would remain physically fit in order to hunt and survive.The first gymnasiums in history were dated over
                                    3000 years ago,in ancient Persia, where they were known as Zurkhaneh, as areas that encouraged physical fitness.</div>

                                <a type="button" class="blue-button" data-bs-toggle="collapse" data-bs-target="#demo" onClick={btn} id="btn">Read More</a>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

        </>
    )
}
export default AboutFitness;