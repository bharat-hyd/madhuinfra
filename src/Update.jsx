import overlay_img from './assets/overlay-img.png'
import { useModal } from './context/ModalContext';
function Update(){
    
    const { openModal} = useModal()
    return (
        <>
        <style>
            {
                `
                #update{
                        background:#22438a;
                        padding:60px 10px;
                        position:relative;
                    }
                 #update .heading{
                    color:white;
                 }
                .input-box{
                    display:flex;
                    max-width:700px;
                    margin:0 auto;
                    padding:20px;
                }
                #update input[type=text]{
                    padding:10px;
                    flex:1 1 60%;
                    background:#22438a;
                    color:white;
                    font-size:16px;
                    outline:none;
                    border:1px solid #ccc;
                    padding:15px 10px;

                }
                #update input[type=text]::placeholder {
                    color: white;           /* text color */
                    font-size: 16px;       /* font size */
                    opacity: 1;            /* make it fully visible */
                }

                .input-box button{
                    padding:10px;
                    flex:1 1 20%;
                    color:#22438a;
                    background:white;
                    border:1px solid white;
                    font-size:18px;
                    position:relative;
                }
                .input-box button::after{
                    position:absolute;
                    content:'';
                    top:50%;
                    right:0;
                    height:1px;
                    width:30px;
                    background:white;
                    transform:translateX(15px);
                    z-index:1;
                }
                .button-box{
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    align-items:center;
                    max-width:600px;
                    margin:0 auto;
                    margin-top:-20px;
                }
                .button-box button{
                    padding:10px 30px;
                    color:white;
                    background:#f90;
                    border:1px solid #f90;
                    font-size:18px;
                    position:relative;
                    display:inline-block;
                    cursor:pointer;
                }
                `
            }
        </style>
        <section id="update">
            <div className="container">
                <h3 className="heading"> Begin Your Home Story with Madhu Infra</h3>
                <p className="subheading">We’re here to turn your dream into an address.</p>
                {/* <div className="input-box">
                    <input type="text" placeholder="Enter your email to subscribe to the newsletter"/>
                    <button>Subscribe</button>
                </div> */}
                <div className="button-box">
                    <button onClick={openModal}>Get in Touch</button>
                    <button onClick={openModal}>Contact Us</button>
                </div>
            </div>
        </section>
        </>
    )
}
export default Update;