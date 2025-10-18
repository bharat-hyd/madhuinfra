import { useEffect, useState } from 'react'
import project_1 from './assets/park-ville.jpg'
import project_2 from './assets/lakshmi-nilayam.jpg'
import project_3 from './assets/lakshmi-nivas.jpg'
import project_4 from './assets/madhu-park-ridge.jpg'
import project_5 from './assets/APHMHIDC.jpg'
import { Link as ScrollLink } from 'react-scroll'
function Project(){
    const projects = [
        {
            title:"Parkville",
            subtitle:"Tellapur, Hyderabad",
            price:"3.59 Cr onwards",
            para:"Welcome to a place where everyday life feels effortless. Parkville brings you spacious homes filled with natural light, surrounded by open spaces where families grow and children explore freely. Perfectly located between Hitech City and Gachibowli, it’s a community designed for comfort, connection, and meaningful living.",
            url:"parkville",
            img:project_1,
        },
        {
            title:"Lakshmi Nilayam",
            subtitle:"Syamala Nagar, Guntur",
            price:"3.59 Cr onwards 2",
            para:"Lakshmi Nilayam is where warmth and belonging come naturally. Ready-to-move homes offer the joy of settling in instantly, surrounded by a welcoming neighbourhood and everyday conveniences. It’s more than just a place to stay it’s where family stories begin.",
            url:"lakshmi-nilayam",
            img:project_2,
        },
        {
            title:"Lakshmi Mayflower",
            subtitle:"Gorantla, Guntur",
            price:"3.59 Cr onwards 2",
            para:"Life flows gently at Lakshmi Mayflower, a peaceful residential enclave close to Amaravati. Thoughtfully designed homes and serene surroundings create a calm, balanced lifestyle. It’s a place where you can slow down, feel at home, and build a future with ease.", 
            url:"lakshmi-mayflower",
            img:project_3,
        },
        {
            title:"Park Ridge",
            subtitle:"Langer Houz, Hyderabad",
            price:"3.59 Cr onwards 2",
            para:"Park Ridge is where city living meets everyday comfort. With beautiful views of Golconda Fort, green landscapes, and a friendly community, it offers a perfect blend of peace and connectivity.",
            url:"park-ridge",
            img:project_4,
        },
        {
            title:"APHMHIDC",
            subtitle:"partnership with AP Govt.",
            price:"3.59 Cr onwards 2",
            para:"Madhu Infra is proud to partner with APHMHIDC, a flagship government initiative focused on building modern healthcare facilities, staff housing, and essential infrastructure across Andhra Pradesh, ensuring quality healthcare reaches every community.",
            url:"aphmhidc",
            img:project_5,
        },
    ]
    const [projectIndex, setProjectIndex] = useState(0)
    const visibleProject = 1
    const projectSlideWidth = 100 / visibleProject;
    useEffect(() => {
        const timer = setInterval(() => {
            setProjectIndex((prev) =>  prev === projects.length - 1 ? 0 : prev + 1)
        },3000)
        return () => clearInterval(timer)
    },[])
    return( 
        <>
        <style>
            {
                `
                    #project{
                        background:white;
                        padding:80px 0px;


                    }
                    .project-list{
                        display:flex;
                        flex-wrap:nowrap;
                        overflow: hidden;      /* hides extra boxes */
                        width: 100%;    
                        height:600px;
                        position:relative;
                        text-align: left;
                        flex-direction:row;
                    }
                    .project-box{
                        flex:0 0 100%;
                        display:flex;
                        flex-wrap:wrap;
                        height:100%;
                        position: relative; 
                    }
                    #project .box-left{
                        flex:1 1 45%;
                    }

                    #project .box-right{
                        flex:1 1 50%;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                        margin-top:150px;
                    }
                    .box-right-text{
                        padding:10px 90px;
                    }
                    .box-right-text p {
                        font-size:17px;
                        color:#999;
                        line-height:1.6;
                        margin-bottom:40px;
                    }
                    .box-right-text a{    
                        color:#39f;
                        font-size:18px;
                    }
                    .box-right-text a:hover{    
                        color:#1763af;
                    }
                    #project .box-left img{
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    }
                    .overlay-project{
                        position:absolute;
                        top:10%;
                        left:39%;
                        z-index:3;

                    }
                    .overlay-head{
                        margin-left:30px;
                        background:#22438a;
                        padding:22px 26px;
                    }
                    .overlay-head span:nth-child(1){
                        font-size:28px;
                        color:white;
                        display:block;
                        line-height:1.6;
                    }
                    .overlay-head span:nth-child(2){
                        font-size:18px;
                        color:#ccc;
                    }
                        
                    .overlay-subhead{
                        background:#f90;
                        padding:15px 25px;
                        color:white;
                        font-size:17px;
                        display:inline-block;
                    }
                    .overlay-project-number{
                        position:absolute;
                        bottom:20px;
                        left:55%;
                    }
                    .overlay-project-number span{
                        padding:10px 12px;
                        color:#999;
                        font-size:15px;
                        cursor:pointer;
                    }
                    .overlay-project-number span.active{
                        color:#f90;
                    }

                    .more {
                        display: inline-block;
                        padding: 18px 24px;
                        border: 1px solid #ccc;
                        margin: 0 auto;
                        margin-top: 90px;
                        position: relative; /* Needed for pseudo-element positioning */
                        z-index: 1; /* Ensures content stays above pseudo-element */
                    }

                    .more a {
                        color: rgb(34, 67, 138);
                        font-size: 14px;
                        text-decoration: none; /* Removes default underline */
                        transition: color 0.5s ease; /* Smooth text color transition */
                        position: relative; /* Ensures text stays above pseudo-element */
                        z-index: 2; /* Keeps text above background */
                    }

                    .more::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0; /* Start with zero width */
                        height: 100%;
                        background: #22438a; /* Background color on hover */
                        transition: width 0.5s ease; /* Animate width from left to right */
                        z-index: 1; /* Below text but above container */
                    }
                    .more::after{
                        content: "";
                        position: absolute;
                        top: 50%;
                        right: 0;
                        height: 1px;
                        width: 20px;
                        transform: translateX(50%);
                        background:#22438a;
                    }
                    .more:hover::before {
                        width: 100%; /* Expand to full width on hover */
                    }

                    .more:hover a {
                        color: white; /* Text color changes to white on hover */
                    }
                    @media(max-width:768px){
                        .box-right-text {
                            padding: 10px 30px;
                        }
                    }
                    @media(max-width:568px){
                        
                        #project .box-left{
                            flex:1 1 95%;
                            position:relative;
                        }

                        #project .box-right{
                            flex:1 1 95%;
                            margin-top:0px;
                        }
                        
                        .box-right-text{
                            padding:10px;
                            text-align:center;
                        }
                        .box-right-text p{
                            padding:10px;
                            text-align:left;
                        }
                        .overlay-project-number{
                            position: absolute;
                            bottom: -30px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        .overlay-project {
                            position: absolute;
                            bottom: 0%;
                            right: 0;
                            top:auto;
                            left:auto;
                            z-index: 3;
                        }
                        .overlay-head {
                            padding: 10px 15px;
                        }
                        .overlay-head span:nth-child(1) {
                            font-size: 22px;
                        }
                        .overlay-head span:nth-child(2) {
                            font-size: 16px;
                        }
                    }

                `
            }
        </style>
           <section id="project">
                <div className="container">
                    <h3 className="heading showAnimation">Explore Our Projects</h3>
                    {/* <p className="subheading">Ongoing Projects</p> */}
                    <div className="project-list">
                        {projects.map((project, index) => (
                            <div className="project-box" key={index} style={{ transform:`translateX(-${projectIndex * projectSlideWidth}%)`,transition: 'transform 0.8s ease'}}>
                                <div className="box-left">
                                    <img src={project.img} alt="" />
                                    <div className="overlay-project">
                                        <div className="overlay-head">
                                            <span>{project.title} </span>
                                            <span>{project.subtitle}</span>
                                        </div>
                                        {/* <div className="overlay-subhead">
                                            3.59 Cr onwards
                                        </div> */}
                                    </div>
                                </div>
                                <div className="box-right">
                                    <div className='box-right-text'>
                                        <p>{project.para}</p>
                                        <ScrollLink to="project">
                                            Visit Details
                                        </ScrollLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='overlay-project-number'>
                            {projects.map((project,index) => (
                                <span href="" key={index} className={index === projectIndex ? 'active' : ''} onClick={() => setProjectIndex(index)}>{index + 1}</span>
                            ))}
                        </div>
                    </div>
                    <div className='more'>
                        <a href="">SHOW ME MORE PROJECTS </a>
                    </div>
                </div>
           </section>
        </>
    )
}
export default Project;