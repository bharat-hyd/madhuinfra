import project_1 from './assets/project_1.jpg'
function Project(){
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
                        flex:wrap;
                        height:600px;
                        position:relative;
                        text-align: left;
                        padding:10px;
                    }
                    .project-box{
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
                    .overlay-project-number a{
                        padding:10px 12px;
                        color:#999;
                        font-size:15px;
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
                    <h3 className="heading showAnimation">Featured Projects</h3>
                    <p className="subheading">Building dreams since 1985</p>
                    <div className="project-list">
                        <div className="project-box">
                            <div className="box-left">
                                <img src={project_1} alt="" />
                                <div className="overlay-project">
                                    <div className="overlay-head">
                                        <span>PS Logistics Park </span>
                                        <span>Kona Expressway</span>
                                    </div>
                                    <div className="overlay-subhead">
                                        3.59 Cr onwards
                                    </div>
                                </div>
                            </div>
                            <div className="box-right">
                                <div className='box-right-text'>
                                    <p>Amidst the cacophony of life, there is a serene Grove. A Grove of Jade that’s rooted deep. That holds a community together. A Grove that connects you with your own world. Where all the like-minded people coexist. It’s time you discover this rarity at the heart of your city and inhabit a space acclaimed by your close ones.</p>
                                    <a href="">Visit Project</a>
                                </div>
                            </div>
                        </div>
                        <div className='overlay-project-number'>
                            <a href="">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                            <a href="">4</a>
                            <a href="">5</a>
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