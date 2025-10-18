import { FaHome, FaLandmark, FaSpeakerDeck, FaDollarSign } from 'react-icons/fa';
import logo from './assets/logo.png'
function Fact(){
    return(
        <>
        <style>
            {
                `
                #fact {
                        background:white;
                        padding:20px 0px;
                }
                .fact-block{
                    max-width:500px;
                    aspect-ratio:1/1;
                    background:red;
                    border-radius:50%;
                    margin:0 auto;
                }
                .fact-list{
                    display:flex;
                    flex-wrap:wrap;
                    align-items:center;
                    justify-content:center;
                    height:100%;
                    position:relative;
                }
                .fact-box{
                    flex:0 0 40%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                }
                .fact-box:nth-child(1), .fact-box:nth-child(2){
                    margin-top:40px;
                }
                .fact-box:nth-child(3), .fact-box:nth-child(4){
                    margin-top:-40px;
                }
                .fact-box-title{
                    display:block;
                    color:white;
                    font-size:20px;
                    margin-bottom:15px;
                }
                .fact-box img{
                    display:block;
                    width:70px;
                }
                .fact-box-symbol{
                    font-size:40px; 
                    color:#eee;
                }
                .overlay-h{
                    position:absolute;
                    top:50%;
                    bottom:50%;
                    width:100%;
                    height:3px;
                    z-index:3;
                    background:white;
                }
                .overlay-v{
                    position:absolute;
                    top:0%;
                    left:50%;
                    width:3px;
                    height:100%;
                    z-index:4;
                    background:white;
                }
                `
            }
        </style>
        <section id="fact">
            <div className="container">
                <div className="fact-block">
                    <div className="fact-list">
                        <div className="fact-box">
                            <span className='fact-box-title'>Product</span>
                            {/* <span><img src={logo}></img></span> */}
                            <span className='fact-box-symbol'><FaHome /></span>
                        </div>
                        <div className="fact-box">
                            <span className='fact-box-title'>Product</span>
                            <span className='fact-box-symbol'><FaDollarSign /></span>
                        </div>
                        <div className="fact-box">
                            <span className='fact-box-title'>Product</span>
                            <span className='fact-box-symbol'><FaLandmark /></span>
                        </div>
                        <div className="fact-box">
                            <span className='fact-box-title'>Product</span>
                            <span className='fact-box-symbol'><FaSpeakerDeck /></span>
                        </div>
                        <div className='overlay-h'></div>
                        <div className='overlay-v'></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Fact;