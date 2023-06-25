
import zumba from './image/zumba.jpg';

const Category = () =>{

   const pt1=()=>{
    document.getElementById("container1").style.backgroundColor="rgb(123, 158, 158)";
    document.getElementById("container1").style.color="black";
    document.getElementById("container1").innerHTML="<h1 style=color:red;text-align:center>Personal Trainer</h1>People work with personal trainers for many reasons. Whether you want to develop an individualized program to support weight loss goals, get in shape, or feel that you'd benefit from the additional accountability or instruction, a personal trainer can be a great resource.But sometimes, people are cautious about investing in a trainer. Cost can be an issue; some people might feel intimidated by working with a pro. But certified fitness professionals are trained to work with clients of all backgrounds and fitness levels. And many can work out package deals to make the service more affordable.If you are starting an exercise program or don't see results with your current routine, a personal trainer might be your best option. Here are 10 reasons why you might want to hire a personal trainer.<h2>What Does A Personal Trainer Do?</h2>Personal trainers work with you one-on-one to help design an engaging exercise regimen, help you with form, ensure you are working all your muscle groups safely, and more. The accountability of meeting your trainer for a set appointment can help stay on track and meet your goals. Personal trainers are excellent resources for beginners who need help getting started as well as for more seasoned exercisers who want to push themselves further.<h3>Evaluate Your Current Program and Goals</h3>By looking at what you're already doing, a trainer can suggest ways to change or tweak your workouts to make them more efficient and effective. A trainer can help determine if your goals are realistic.<h3>Help You Stay Motivated and Keep Pushing</h3>Knowing you have an appointment with a pro can help you maintain motivation to exercise. People often don't see results because they're not working as hard as they could.<br />It's easy to slack off when you're by yourself, but having someone to challenge you (and cheer you on) can make a difference. A trainer can help you set weekly goals, then check in regularly to see how you're doing, keeping you motivated and pushing toward your goals.<h3>Provide Educated Advice</h3> Whether you want to learn how to lift weights properly or do a new exercise, a trainer is a wealth of knowledge. For example, you might think you need to focus on cardio to lose weight, but you need strength training and core training, too,1 and a trainer can help you set up a plan.You may be getting results—just not in the way you expected. You might gain muscle and lose fat, changing your body composition while your weight stays constant. While this is rare for those who've been training for a while, it's a phenomenon that happens frequently among new lifters.";
   }

   const pt2=()=>{
document.getElementById("container1").innerHTML="<center><h2 style=color:red >DANCE CLASSES</h2> </center>Since colonial times,there have been dancing masters in America, often itinerant, to teach the art of social dancing. John Playfords The English Dancing Master 1651 is a landmark guide for social dance classes that eventually took root in the United States. William B. DeGarmo wrote The Dance of Society in 1875. Instruction in dancing included instilling the moral and physically corrective aspects of dance. The 1820s Jacksonian era generated rudeness, and, in response, eighteen dance-etiquette manuals came into circulation in the 1830s.<br /> Social dancing classes were offered in the European waltz and contra country dance in the nineteenth century. Then came lessons in the dances of the jazz era with its tough dances. From about 1910 on, as part of a dance craze that swept the United States, social dance fads have cascaded in and out of popularity. Numerous dance academies mushroomed during the commercial culture of dance halls from 1880 to 1920 to accommodate neophytes. Dance classes helped people keep up with the latest steps. In 1911, New York City alone listed 100 dancing academies serving 100,000 paying pupils, 90 percent under age twenty-one. Dance halls also offered classes in fashion. The New York Society of Teachers of Dancing formed to counter new vulgar dances and customs, such as cutting in from the ballroom.";

}

const pt3=()=>{
   
    document.getElementById("container1").innerHTML="<center><h2 style=color:red>Zumba Classes</h2></center>Grooving to the beats of salsa, flamenco, and merengue music feels more like a dance party than a workout, which is exactly what makes Zumba so popular. The Latin-inspired dance workout is one of the most popular group exercise classes in the world.<br /><h4>Intensity Level: Medium</h4>Zumba is an interval workout. The classes move between high- and low-intensity dance moves <br />designed to get your heart rate up and boost cardio endurance.<h4>Areas It Targets</h4><b>.Core</b>Yes. Many of the dance steps used in the routines emphasize the hips and midsection to help strengthen the core.<br /><b>Arms: </b>No. Traditional Zumba classes do not target the arms. Specialized classes like Zumba Toning use weights to help strengthen and tone the arms.<br /><b>Legs: </b>Yes. The jumps and lunges that are parts of the choreographed movements help work the quads and hamstrings.<br/><b>Strength: </b>Yes. Traditional Zumba workouts emphasize strengthening the core, while Zumba Toning and Zumba Step workouts incorporate weights to build muscles in the arms, legs, and glutes. ";
}
 

return(
        <>
        
            <p className="blogcategory" onClick={pt1}> Personal Trainer </p>
            <p className="blogcategory" onClick={pt2}> Dancing Classes </p>
            <p className="blogcategory" onClick={pt3}> Zumba Classes </p>
            <p className="blogcategory"> Aerobics Classes </p>
            <p className="blogcategory"> Gymnastic Classes </p>
            <p className="blogcategory"> Steam Bath </p>
            <p className="blogcategory"> Cardio Classes </p>
            <p className="blogcategory"> Swimming </p>
        </>
    )

}

export default Category;