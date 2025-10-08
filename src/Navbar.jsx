import logo from './assets/web-logo.svg'
function Navbar(){
    return(
        <>
        <style>
            {
                `
                nav{
                    background:rgba(0,0,0,0.3);
                    padding:10px 10px;
                    position:fixed;
                    top:0;
                    left:0;
                    width:100%;
                    z-index:1000;
                }
                .nav-list{
                    display:flex;
                    flex-wrap:wrap;
                    align-items:center;
                    justify-content:space-between;
                }
                nav ul{
                    list-style:none;
                }
                nav .logo{
                    width:150px;
                }
                nav li{
                    display:inline-block;
                }
                nav li a{
                    color:white;
                    font-size:18px;
                    padding:5px 15px;
                }
                .menu-button li a{
                    background:white;
                    padding:10px 25px;
                    margin-right:20px;
                    color:#22438a;
                }
                `
            }
        </style>
        <nav>
            <div className="container">
                <div className="nav-list">
                    <img src={logo} className='logo'/>
                    <ul className='menu'>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Faq</a></li>
                    </ul>
                    <ul className='menu-button'>
                        <li><a href="">Enquiry</a></li>
                        <li><a href="">WhatsApp</a></li>
                    </ul>
                </div>
            </div>
        </nav>
            <style>
            {
                ` #hero {
                    height: 100vh;
                    position:relative;
                    }
                .main-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* fills hero section nicely */
                }
                .hero-overlay{
                    position:absolute;
                    top:45%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    z-index:2;
                    color:white;
                    text-align:center;
                }
                
                .hero-overlay h1{
                    font-family: "Times New Roman", Times;
                    font-size:54px;
                    line-height:2.5;
                    border-top:1px solid #ccc;
                    border-bottom:1px solid #ccc;
                }
                .hero-overlay .num{
                    color:#f90;
                }
                .hero-overlay p{
                    font-size:20px;
                    line-height:1.1;
                    margin-top:-15px;
                }
                .hero-overlay .hide{
                    display:none;
                }
                
                .hero-overlay-btn{
                    position:absolute;
                    top:90%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    z-index:2;
                    color:white;
                    text-align:center;
                }
                .btn-box{
                    display: inline-block; 
                    border:2px solid #bbb;
                    padding:5px;
                    height:25px;
                    width:12px;
                    border-radius:20px;
                    animation:upDown 2.6s ease infinite;
                }
                .btn-box:hover{
                    animation: upDown 2.6s ease infinite, DrawBorder 0.6s ease forwards;
                }
                @keyframes upDown{
                    0%{
                        transform:translateY(0)
                    }
                    50%{
                        transform:translateY(10px)
                    }
                    100%{
                        transform:translateY(0px)
                    }
                }
                @keyframes DrawBorder{
                    0%{
                        border-top:2px solid white;
                    }
                    50%{
                        border-right:2px solid white;
                    }
                    75%{
                        border-bottom:2px solid white;
                    }
                    100%{
                        border:2px solid white;
                    }
                }
                .btn-line{
                    display: inline-block; 
                    width:3px;
                    height:7px;
                    background:white;
                    animation:upDown2 2.6s ease infinite;
                }
                @keyframes upDown2{
                    0%{
                        transform:translateY(0);
                        opacity:1;
                    }
                    100%{
                        transform:translateY(15px);
                        opacity:0;
                    }
                }
                `
            }
        </style>
        <section id="hero">
            <video autoPlay muted loop playsInline className="main-video">
				<source src="https://psgroup.in/assets/media/home-video.mp4" type="video/mp4" />
			</video>
            <div className='hero-overlay'>
                <h1>Its <span className='head'><b className='visible'>Fun</b><b className='hide'>Quality</b><b className='hide'>Family</b></span> Time</h1>
                <p><span className='num'>15000+</span>  Happy Families</p>
            </div>
            <div className='hero-overlay-btn'>
                <span className='btn-box'><span className='btn-line'></span></span>
            </div>
        </section>
        </>
    )
}
export default Navbar;