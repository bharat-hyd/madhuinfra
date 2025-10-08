import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
function Footer(){
    return (
        <>
        <style>
            {
                `
                .footer-part-1{
                    background:white;
                    padding:60px 10px;
                }
                .footer-list{
                    display:flex;
                    flex-wrap:wrap;
                }
                .footer-box{
                    flex:1 1 30%;
                    padding:30px 10px;
                    text-align:center;
                    border-right:1px solid #ccc;
                }
                .footer-box:nth-child(3n){
                    border-right:none;
                }
                .footer-box-title{
                    font-size:18px;
                    color:#363a54;
                    display:block;
                    line-height:2.9;
                }
                .footer-box-value {
                    font-size:18px;
                    line-height:1.9
                }
                .footer-box-value a{
                   color:#22438a !important;
                }
                .footer-part-2{
                    background:#e8e9ed;
                    padding:5px;
                }
                
                .footer-part-2 ul{
                    list-style:none;
                    text-align:left;
                }
                .footer-part-2 li{
                    display:inline-block;
                    padding:1px 10px;
                }
                .footer-part-2 li a{
                    color:#999;
                    font-size:13px;
                }
                .color{
                    color:#22438a !important;
                }
                .footer-box:nth-child(3) .footer-box-value a {
                    padding: 10px 15px;
                    font-size: 23px;
                }
                @media(max-width:568px){
                    
                .footer-box{
                    flex:1 1 90%;
                    border-bottom:1px solid #ccc;
                    border-right:none;
                }
                .footer-box:nth-last-child(-n+1){
                    border-bottom:none;
                }
                }
                `
            }
        </style>
        <section className="footer">
            <div className="footer-part-1">
                <div className="container">
                    <div className="footer-list">
                        <div className="footer-box">
                            <span className="footer-box-title">Mail</span>
                            <span className="footer-box-value"><a href="mailto:sales@psgroup.in">sales@psgroup.in</a></span>
                        </div>
                        <div className="footer-box">
                            <span className="footer-box-title">Call</span>
                            <span className="footer-box-value"><a href="tel:+913367676700">+91 33 6767 6700</a></span>
                        </div>
                        <div className="footer-box">
                            <span className="footer-box-title">SOCIAL</span>
                            <span className="footer-box-value">
                                <a href="mailto:sales@psgroup.in"><FaFacebook /></a>
                                <a href="mailto:sales@psgroup.in"><FaLinkedin /></a>
                                <a href="mailto:sales@psgroup.in"><FaYoutube /></a>
                                <a href="mailto:sales@psgroup.in"><FaInstagram /></a>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-part-2">
                <div className="container">
                    <ul>
                        <li><a href="">Disclaimer</a></li>
                        <li><a href="">Privacy Policy </a></li>
                        <li><a href="">Terms of use</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">ESG</a></li>
                        <li><a href="javascript:void(0)" className="color">2024 PS Group</a></li>
                    </ul>
                </div>
            </div>
        </section>
        </>   
    )
}
export default Footer;