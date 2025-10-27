import { useEffect, useState } from 'react';
import logo from './assets/logo.png'
import success from './assets/success.png'
import { Link as ScrollLink } from 'react-scroll';
import { useModal } from './context/ModalContext';

function Navbar(){
    const { openModal } = useModal();
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 40){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
    })


// mobile nav bar

const [menu,setMenu] = useState(false)

const toggleMenu = () => {
    setMenu(prev => !prev);
}

    const hero_h1 = ["Dreams","Trust","Legacy"]
    const [hIndex,setHIndex] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setHIndex((prev) => prev + 1 >= hero_h1.length ? 0 : prev + 1)
        },3000)
        return () => clearInterval(timer)
    },[])
    return(
        <>
        <style>
            {
                `
                nav{
                    background:rgba(0,0,0,0);
                    padding:15px 10px;
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
                    width:60px;
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
                .menu-button li span{
                    background:white;
                    padding:10px 25px;
                    margin-right:20px;
                    color:#22438a;
                }
                
                .scrolled {
                    background:white;
                    padding:14px 10px;
                    box-shadow: 0px 1px 10px #dfdfdf;
                    transition: background 1.0s ease, padding 1.0s ease 0.4s;
                }
                    
                .scrolled li a{
                    color:#22438a;
                    font-size:18px;
                    padding:5px 15px;
                }
                @media(max-width:768px){
                    nav{
                        display:none;
                    }
                }
                `
            }
        </style>
        <nav className={scroll ? 'scrolled' : ''}>
            <div className="container">
                <div className="nav-list">
                    <img src={logo} className='logo'/>
                    <ul className='menu'>
                        <li><ScrollLink to="project" smooth={true} duration={500} offset={-50}>Projects</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true} duration={500} offset={-50}>About Us</ScrollLink></li>
                        <li><ScrollLink to="awards" smooth={true} duration={500} offset={-50}>Awards</ScrollLink></li>
                        <li><ScrollLink to="review" smooth={true} duration={500} offset={-50}>Reviews</ScrollLink></li>
                    </ul>
                    <ul className='menu-button'>
                        {/* <li><span onClick={openModal}>Contact</span></li> */}
                        <li><span>Contact</span></li>
                        <li><a href="https://wa.me/919347513367">WhatsApp</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <style>
            {
                `
                #mobile-nav{
                    position:fixed;
                    top:0;
                    left:0;
                    width:100%;
                    z-index:1000;
                    padding:10px;
                    box-sizing: border-box;
                    display:none;
                }
                .mobile-head{
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    align-items:center;
                }
                .mobile-head.active {
                    border-bottom:1px solid #a8c6eb;
                }
                .mobile-head .logo {
                    width:50px;
                }
                .humburg {
                    width: 45px;
                    height: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    cursor: pointer;
                    padding: 10px;
                }

                .humburg span {
                    display: block;
                    height: 4px;
                    width: 100%;
                    background: white;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                    transition-origin:center;
                }
                .humburg.active span {
                    background: #35ff0a;
                }

                .humburg.open span:nth-child(1){ 
                transform: rotate(45deg) translate(9px, 9px);
                }

                .humburg.open span:nth-child(2){
                    opacity: 0;
                }

                .humburg.open span:nth-child(3){
                transform: rotate(-45deg) translate(9px, -9px);
                }
                .mobile-menu{
                    text-align:center;
                }
                .mobile-menu-list{
                    list-style:none;
                }
                .mobile-menu-list li{
                    padding:10px;
                    margin-bottom:10px;
                }
                .mobile-menu-list li a{
                    color:white;
                }
                .mobile-menu-button-list{
                    list-style:none;
                }
                .mobile-menu-button-list li{
                    padding:10px;
                    margin-bottom:20px;
                }
                .mobile-menu-button-list li a{
                    color:#22438a;
                    background:white;
                    padding:12px 17px;
                }
                
                .nav-overlay{
                    position:absolute;
                    top:0;
                    right:0;
                    background:#22438a;
                    z-index:-1;
                    animation:backGround 0.5s ease forwards;
                }
                @keyframes backGround{
                    0%{
                        width:80px;
                        height:80px;
                        border-bottom-left-radius:50%;
                    }
                    100%{
                        width:100%;
                        height:100vh;
                        border-bottom-left-radius:0%;
                    }
                }
                @media(max-width:768px){
                    #mobile-nav{
                        display:block;
                    }
                }
                `
            }
        </style>
        <section id="mobile-nav" className={scroll ? 'scrolled' : ''}>
            <div className={`mobile-head ${menu ? 'active' : ''}`}>
                <img src={logo} className='logo'/>
                <div className={`humburg ${menu ? 'open' : ''} ${scroll ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {menu && 
            <>
                <div className='mobile-menu'>
                    <ul className='mobile-menu-list'>
                        <li><ScrollLink to="project" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Projects</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>About Us</ScrollLink></li>
                        <li><ScrollLink to="awards" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Awards</ScrollLink></li>
                        <li><ScrollLink to="review" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Reviews</ScrollLink></li>
                    </ul>
                    <ul className='mobile-menu-button-list'>

                        <li><ScrollLink to="footer" smooth={true} duration={700} offset={-50}  onClick={toggleMenu}>Contact</ScrollLink></li>
                        <li><a href="https://wa.me/919347513367">WhatsApp</a></li>
                    </ul>
                </div>
                <div className='nav-overlay'></div>
            </>
             }
        </section>
            <style>
            {
                ` #hero {
                    height: 100vh;
                    position:relative;
                    }
                #hero::after {
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    z-index:1;
                    background: radial-gradient(872px at 24% 2%, rgba(255, 153, 0, 0.5) 0px, rgba(0, 52, 113, 0.5) 100%);
                    content:'';
                }
                .main-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* fills hero section nicely */
                    position:relative;
                }
                .hero-overlay{
                    position:absolute;
                    top:48%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    z-index:2;
                    color:white;
                    text-align:center;
                    width:100%;
                }
                
                .hero-overlay h1{
                    font-family: "Playfair Display", serif;
                    font-size:54px;
                    line-height:2.5;
                    border-top:1px solid #ccc;
                    border-bottom:1px solid #ccc;
                    display:inline-block;
                }
                .hero-overlay .num{
                    color:#f90;
                }
                .hero-overlay .from-num{
                        color: #35ff0a;
                        font-weight: bold;
                        line-height: 1.8;
                }
                .hero-overlay img{
                    max-width:170px;
                    display:block;
                    margin:0 auto;
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
                .hero_change_wrapper {
                    display: inline-block;
                }
                .hero_change{
                    display: inline-block;
                    animation:slideDown1 0.4s ease forwards, slideDown2 0.4s ease 2.5s forwards;
                }
                @keyframes slideDown1{
                    0%{
                        opacity:1;
                        transform:translateY(-30px);
                    }
                    100%{
                        opacity:1;
                        transform:translateY(0px);
                    }
                }
                @keyframes slideDown2{
                    0%{
                        opacity:1;
                        transform:translateY(0px);
                    }
                    100%{
                        opacity:0;
                        transform:translateY(30px);
                    }
                }
                    @media(max-width:768px){
                    .hero-overlay h1 {
                        font-size: 30px;
                    }
                        
                    .hero-overlay img{
                        width:120px;
                        display:block;
                        margin:0 auto;
                    }
                    .hero-overlay p {
                        font-size: 18px;
                        line-height: 1.8;
                    }
                    }
                `
            }
        </style>
        <section id="hero">
            <video autoPlay muted loop playsInline className="main-video">
				<source src="https://eteamworks.com/main.mp4" type="video/mp4" />
			</video>
            <div className='hero-overlay'>
                <img src={success} alt="" />
                <h1>Building 
                      {" "}<span className="hero_change_wrapper">
                        <span key={hIndex} className="hero_change">
                        {hero_h1[hIndex]}
                        </span>
                    </span>{" "}
                     </h1>
                {/* <p><span className='from-num'>Since 2004</span></p> */}
                {/* <p><span className='num'>20+</span> years of <span className='num'>Building Trust</span> and <span className='num'>Legacy</span></p> */}
            </div>
            <div className='hero-overlay-btn'>
                <span className='btn-box'><span className='btn-line'></span></span>
            </div>
        </section>
        </>
    )
}
export default Navbar;